// paginator.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component'; // Import the PaginatorComponent

@NgModule({
  declarations: [
    PaginatorComponent // Declare the PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent // Export the PaginatorComponent to make it accessible from other modules
  ]
})
export class PaginatorModule { }
