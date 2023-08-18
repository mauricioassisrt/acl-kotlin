import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Papel} from "../papel";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PapelService} from "../papel.service";
import {map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ToastOptions} from "../../../util/toast/toast-options";
import {ToastComponent} from "../../../util/toast/toast.component";
import {Util} from "../../../util/util";

@Component({
  selector: 'app-papel-edit',
  templateUrl: './papel-edit.component.html',
  styleUrls: ['./papel-edit.component.css']
})
export class PapelEditComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  @ViewChild('nomeInput') nomeInput!: ElementRef;
  @ViewChild('descricaoInput') descricaoInput!: ElementRef;
  loading: boolean = false
  disabled: boolean = false
  id!: string;
  telaAtual: string = '';
  papel!: Papel;
  feedback: any = {};
  toastOptions: ToastOptions = new ToastOptions()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private papelService: PapelService,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.loading = true
    this.route.params.pipe(
      map((p: Params) => p['id']),
      switchMap(id => {
        if (id === 'new') {
          this.telaAtual = "Novo Papel"
          return of(new Papel());
        }
        this.telaAtual = "Editar Papel"
        return this.papelService.findById(id);
      })
    ).subscribe(
      (papel: Papel) => {
        this.papel = papel;
        this.loading = false
      },
      () => {
        Util.exibeToastError(this.toastOptions, this.toastComponent, "Erro ao carregar dados")
        Util.acessarRotaEspecifica(this.router, 1000, '/papel')
      }
    );
  }

  save() {
    this.loading = true
    if (this.validarPreenchimentoCampos()) {
      this.papelService.save(this.papel).subscribe(
        () => {
          Util.exibeToastSalvoComSucesso(this.toastOptions, this.toastComponent, "O registro " + this.papel.descricao + " foi atualizado com sucesso!")
          Util.acessarRotaEspecifica(this.router, 1000, '/papel')
          this.loading = false
          this.disabled = true
        },
        () => {
          Util.exibeToastError(this.toastOptions, this.toastComponent, "Erro ao salvar o registro")
          Util.acessarRotaEspecifica(this.router, 1000, '/papel')
        }
      );
    }
  }

  cancel() {
    Util.acessarRotaEspecifica(this.router, 0, '/papel')
  }

  private validarPreenchimentoCampos(): boolean {
    let isValid = true;
    if (!this.papel.nome) {
      isValid = false;
      this.loading = false
      Util.adicionaEstiloErrorInput(this.nomeInput.nativeElement, this.renderer)
      Util.exibeToastErrorCamposObrigatorios(this.toastOptions, this.toastComponent)
    } else {
      Util.removerEstiloErrorInput(this.nomeInput.nativeElement, this.renderer)
    }

    if (!this.papel.descricao) {
      isValid = false;
      this.loading = false
      Util.adicionaEstiloErrorInput(this.descricaoInput.nativeElement, this.renderer)
      Util.exibeToastErrorCamposObrigatorios(this.toastOptions, this.toastComponent)
    } else {
      Util.removerEstiloErrorInput(this.descricaoInput.nativeElement, this.renderer)
    }
    return isValid
  }
}
