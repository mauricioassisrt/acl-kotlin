import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-papel-lista',
  templateUrl: './papel-lista.component.html',
  styleUrls: ['./papel-lista.component.css']
})
export class PapelListaComponent implements OnInit {

  papel: any;
  titulo: string = "Papel"
  loading: boolean = false

  constructor(private authService: LoginService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.authService.getDados().subscribe(
      (response) => {
        this.loading = false
        this.papel = response.items;
      },
      (error) => {

        this.loading = false
        console.error(error);
      }
    );
  }
}
