import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {PapelFilter} from "../papel-filter";
import {Papel} from "../papel";
import {PapelService} from "../papel.service";

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
    return this.papelService.papelList;
  }

  constructor(private papelService: PapelService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.papelService.load(this.filter);
  }

  select(selected: Papel): void {
    this.selectedPapel = selected;
  }

  delete(papel: Papel): void {
    if (confirm('Are you sure?')) {
      this.papelService.delete(papel).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
