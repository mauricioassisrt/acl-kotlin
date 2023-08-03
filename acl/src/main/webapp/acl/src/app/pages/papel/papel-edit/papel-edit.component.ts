import { Component, OnInit } from '@angular/core';
import {Papel} from "../papel";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PapelService} from "../papel.service";
import { map, switchMap } from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-papel-edit',
  templateUrl: './papel-edit.component.html',
  styleUrls: ['./papel-edit.component.css']
})
export class PapelEditComponent implements OnInit {
  loading: boolean = false
  id!: string;
  papel!: Papel;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private papelService: PapelService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((p: Params) => p['id']),
      switchMap(id => {
        if (id === 'new') { return of(new Papel()); }
        return this.papelService.findById(id);
      })
    ).subscribe(
      (papel: Papel) => {
        this.papel = papel;
        this.feedback = {};
      },
      err => {
        this.feedback = { type: 'warning', message: 'Error loading' };
      }
    );
  }

  save() {
    this.papelService.save(this.papel).subscribe(
      papel => {
        this.papel = papel;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/papel']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/papel']);
  }
}
