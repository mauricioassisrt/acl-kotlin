import {Component, OnInit, ViewChild} from '@angular/core';
import {PapelFilter} from "../papel-filter";
import {Papel} from "../papel";
import {PapelService} from "../papel.service";
import {Subscription} from "rxjs";
import {ToastComponent} from "../../../util/toast/toast.component";
import {ToastOptions} from "../../../util/toast/toast-options";
import {Util} from "../../../util/util";


@Component({
  selector: 'app-papel-lista',
  templateUrl: './papel-lista.component.html',
  styleUrls: ['./papel-lista.component.css']
})
export class PapelListaComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  toastOptions: ToastOptions = new ToastOptions()
  papel: any;
  titulo: string = "Papel"

  filter = new PapelFilter();
  selectedPapel!: Papel;
  feedback: any = {};
  loadingSubscription: Subscription;
  loading: boolean = false; // Declare a variável 'loading' como um booleano

  get papelList(): Papel[] {
    return this.papelService.papelList;
  }

  constructor(private papelService: PapelService) {
    this.loadingSubscription = this.papelService.loading$.subscribe(loading => {
      this.loading = loading; // Atualize a propriedade this.loading
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe(); // Importante para evitar vazamentos de memória
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.papelService.load(this.filter);
  }

  select(selected: Papel): void {
    this.selectedPapel = selected;
  }

  delete(papel: Papel): void {
    Util.confirmDelete(() => {
      this.loading = true;
      this.papelService.delete(papel).subscribe(
        () => {
          Util.exibeToastSalvoComSucesso(this.toastOptions, this.toastComponent, "Registro excluido com sucesso!")
          setTimeout(() => {
            this.search();
          }, 1000);
          this.loading = false;
        },
        () => {
          this.loading = false;
          Util.exibeToastError(this.toastOptions, this.toastComponent, "Erro ao excluir registro")
        }
      );
    });
  }
}
