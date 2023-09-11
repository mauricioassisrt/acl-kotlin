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
  papelList: Papel[] = [];
  currentPage: number = -1
  totalItems: number = -1
  totalPages: number = -1
  papel: any;
  titulo: string = "Papel"
  parametrosPagina: {} = {}
  filter = new PapelFilter();
  loadingSubscription: Subscription;
  loading: boolean = false; // Declare a variável 'loading' como um booleano

  selectedPapel: Papel | null = null;
  currentSortColumn: keyof Papel = 'id';
  isSortAscending: boolean = true;
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
  avancarVoltarPagina(proximaAnterior: boolean){
    if(proximaAnterior)
      this.currentPage++
    else
      this.currentPage--
    this.search();
  }

  search(): void {
    this.papelService.load(this.filter, this.currentPage).subscribe(
      parametrosPagina => {
        // Faça o que precisa com parametrosPagina
        this.papelList = parametrosPagina.items
        this.totalItems = parametrosPagina.totalItems
        this.totalPages = parametrosPagina.totalPages
        this.currentPage = parametrosPagina.currentPage
      },
      () => {
        // Lida com erros, se necessário
      }
    );
  }

  select(selected: Papel): void {
    this.selectedPapel = selected;
  }

  delete(papel: Papel): void {
    Util.confirmDelete(() => {
      this.papelService.delete(papel).subscribe(
        () => {
          Util.exibeToastSalvoComSucesso(this.toastOptions, this.toastComponent, "Registro excluido com sucesso!")
          const posicao = this.papelList.findIndex(papels => papels.id === papel.id)
          if(posicao !== -1)
            this.papelList.splice(posicao, 1)
        },
        () => {
          this.loading = false;
          Util.exibeToastError(this.toastOptions, this.toastComponent, "Erro ao excluir registro")
        }
      );
    });
  }

  sort(column: keyof Papel) {
    if (this.currentSortColumn === column) {
      this.isSortAscending = !this.isSortAscending;
      this.filter.sortBy = column
    } else {
      this.currentSortColumn = column;
      this.isSortAscending = true;
      this.currentPage = 0
    }
    this.filter.sortOrder = this.isSortAscending ? 'asc' : 'desc';


    this.search()
  }
}
