import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {PapelFilter} from "../papel-filter";
import {Papel} from "../papel";
import {PapelService} from "../papel.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-papel-lista',
  templateUrl: './papel-lista.component.html',
  styleUrls: ['./papel-lista.component.css']
})
export class PapelListaComponent implements OnInit {

  papel: any;
  titulo: string = "Papel"
  loading: boolean = false

  filter = new PapelFilter();
  selectedPapel!: Papel;
  feedback: any = {};

  get papelList(): Papel[] {
    this.loading = this.papelService.loading
    return this.papelService.papelList;
  }

  constructor(private papelService: PapelService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.papelService.load(this.filter, true);
    this.loading = this.papelService.loading
  }

  select(selected: Papel): void {
    this.selectedPapel = selected;
  }

  delete(papel: Papel): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action can't be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.papelService.delete(papel).subscribe(
          () => {
            this.feedback = { type: 'success', message: 'Delete was successful!' };
            setTimeout(() => {
              this.search();
            }, 1000);
          },
          err => {
            this.feedback = { type: 'warning', message: 'Error deleting.' };
          }
        );
      }
    });
  }
}
