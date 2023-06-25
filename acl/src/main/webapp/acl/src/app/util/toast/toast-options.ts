import {ToastComponent} from "./toast.component";

export class ToastOptions {
  private _tituloError: string = "";
  private _menssagemError: string = "";
  private _classError: string = "";


  get tituloError(): string {
    return this._tituloError;
  }

  set tituloError(value: string) {
    this._tituloError = value;
  }

  get menssagemError(): string {
    return this._menssagemError;
  }

  set menssagemError(value: string) {
    this._menssagemError = value;
  }

  get classError(): string {
    return this._classError;
  }

  set classError(value: string) {
    this._classError = value;
  }

  static montaToaster(mensagemError: string,
                      tituloError: string,
                      classError: string,
                      toastOptions: ToastOptions,
                      toastComponent: ToastComponent) {
    toastOptions.menssagemError = mensagemError;
    toastOptions.tituloError = tituloError;
    toastOptions.classError = classError;
    toastComponent.show();
  }
}
