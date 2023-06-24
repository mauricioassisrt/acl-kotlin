import {Component, Input} from '@angular/core';
import {ToastOptions} from "./toast-options";

declare var $: any;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() options: ToastOptions = new ToastOptions();

  show() {
    setTimeout(() => {
      $('.toast').toast({
        delay: 5000,
      }).toast('show');
    }, 0);
  }
}
