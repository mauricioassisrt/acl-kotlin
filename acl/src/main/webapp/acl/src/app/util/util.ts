import {Renderer2} from "@angular/core";
import {Router} from "@angular/router";
import {ToastOptions} from "./toast/toast-options";
import {ToastComponent} from "./toast/toast.component";
import Swal from "sweetalert2";

export class Util {

  static removerEstiloErrorInput(inputElement: HTMLElement, renderer: Renderer2) {
    renderer.removeClass(inputElement, 'error-border');
  }

  static adicionaEstiloErrorInput(inputElement: HTMLElement, renderer: Renderer2) {
    renderer.addClass(inputElement, 'error-border');
  }

  static acessarRotaEspecifica(router: Router, timeOut: number, rota: string){
    setTimeout(() => {
      router.navigate([rota]);
    }, timeOut);
  }

  static exibeToastErrorCamposObrigatorios(toastOptions:ToastOptions, toastComponent:ToastComponent) {
    ToastOptions.montaToaster(
      "Existem campos sem preenchimento",
      "Campos obrigatórios",
      "bg-warning",
      toastOptions,
      toastComponent)
  }

  static exibeToastError(toastOptions:ToastOptions, toastComponent:ToastComponent, descricao:string) {
    ToastOptions.montaToaster(
      descricao,
      "Erro",
      "bg-danger",
      toastOptions,
      toastComponent
    );
  }
  static exibeToastSalvoComSucesso(toastOptions:ToastOptions, toastComponent:ToastComponent, descricao:string) {

    ToastOptions.montaToaster(
      descricao,
      "Ação concluida com sucesso",
      "bg-success",
      toastOptions,
      toastComponent
    );
  }

  static confirmDelete(callback: () => void): void {
    Swal.fire({
      title: 'Apagar o registro?',
      text: "Tem certeza que deseja excluir o registro !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }
}
