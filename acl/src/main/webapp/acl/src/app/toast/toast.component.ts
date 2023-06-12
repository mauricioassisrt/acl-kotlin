import {Component, Input} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() title: string = "";
  @Input() message: string = "";
  @Input() class: string = "";

  show() {
    $('.toast').toast({
      delay: 5000
    }).toast('show')
  }
}
