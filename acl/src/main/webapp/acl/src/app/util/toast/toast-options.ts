import {ToastComponent} from "./toast.component";

export class ToastOptions {
  private _titulo: string = "";
  private _menssagem: string = "";
  private _class: string = "";


  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get menssagem(): string {
    return this._menssagem;
  }

  set menssagem(value: string) {
    this._menssagem = value;
  }

  get class(): string {
    return this._class;
  }

  set class(value: string) {
    this._class = value;
  }

  static montaToaster(mensagem: string,
                      titulo: string,
                      classStyle: string,
                      toastOptions: ToastOptions,
                      toastComponent: ToastComponent) {
    toastOptions.menssagem = mensagem;
    toastOptions.titulo = titulo;
    toastOptions.class = classStyle;
    toastComponent.show();
  }
}
