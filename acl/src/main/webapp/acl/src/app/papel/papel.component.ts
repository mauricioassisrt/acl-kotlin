import {Component, OnInit} from '@angular/core';
import {LoginService} from "../auth/services/login.service";

@Component({
  selector: 'app-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.css']
})
export class PapelComponent implements OnInit {
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
