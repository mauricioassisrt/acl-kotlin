import {Renderer2} from "@angular/core";

export class Util {

  static removerEstiloErrorInput(inputElement: HTMLElement, renderer: Renderer2) {
    renderer.removeClass(inputElement, 'error-border');
  }

  static adicionaEstiloErrorInput(inputElement: HTMLElement, renderer: Renderer2) {
    renderer.addClass(inputElement, 'error-border');
  }

}
