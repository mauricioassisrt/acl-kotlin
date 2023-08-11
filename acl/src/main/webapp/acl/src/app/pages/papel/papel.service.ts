import { Injectable } from '@angular/core';
import {Papel} from "./papel";
import {EMPTY, Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PapelFilter} from "./papel-filter";
import {ApiResponseWithPagination} from "../../util/pagination/ApiResponseWithPagination";

@Injectable({
  providedIn: 'root'
})
export class PapelService {
  papelList: Papel[] = [];
  apiResponseWithPagination: {}  = {}
  loading: boolean = false
  private loadingSubject = new Subject<boolean>();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Papel> {
    const url = `http://localhost:8080/api/papeis/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Papel>(url, {params, headers});
  }

  load(filter: PapelFilter): void {
    this.loadingSubject.next(true); // Ative o indicador de carregamento
    this.find(filter).subscribe(result => {
        this.papelList = result.items
        this.apiResponseWithPagination = result
        this.loadingSubject.next(false); // Desative o indicador após o carregamento
      },
      err => {
        this.loadingSubject.next(false); // Lida com erros também
      }
    );
  }


  find(filter: PapelFilter):Observable<ApiResponseWithPagination<Papel>>{
    // const url = `http://localhost:8080/api/papeis/`;
    // const headers = new HttpHeaders().set('Accept', 'application/json');
    //
    // const params = {
    //   'nome': filter.nome,
    //   'descricao': filter.descricao,
    // };

    return this.http.get<ApiResponseWithPagination<Papel>>(`http://localhost:8080/api/papeis/`)
  }

  save(entity: Papel): Observable<Papel> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://localhost:8080/api/papeis/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Papel>(url, entity, {headers, params});
    } else {
      url = `http://localhost:8080/api/papeis/`;
      return this.http.post<Papel>(url, entity, {headers, params});
    }
  }

  delete(entity: Papel): Observable<Papel> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://www.angular.at/api/flight/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Papel>(url, {headers, params});
    }
    return EMPTY;
  }
}
