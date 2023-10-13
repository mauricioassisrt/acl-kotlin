import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  selectedOption: string = '';
  @Output() optionSelected = new EventEmitter<string>();
  @Input() receivedObject: any;
  onOK() {
    // Emitir o valor selecionado para o componente pai
    this.optionSelected.emit(this.selectedOption);
  }
}
