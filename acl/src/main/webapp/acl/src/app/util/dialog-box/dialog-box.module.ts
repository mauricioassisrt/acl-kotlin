import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingComponent} from "../loading/loading.component";
import {DialogBoxComponent} from "./dialog-box.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DialogBoxComponent
  ]
})
export class DialogBoxModule { }
