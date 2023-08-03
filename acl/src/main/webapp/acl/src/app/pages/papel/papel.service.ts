import { Injectable } from '@angular/core';
import {Papel} from "./papel";
import {EMPTY,Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PapelFilter} from "./papel-filter";
import {ApiResponseWithPagination} from "../../util/pagination/ApiResponseWithPagination";

@Injectable({
  providedIn: 'root'
})
export class PapelService {
  papelList: Papel[] = [];
  apiResponseWithPagination: {}  = {}

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Papel> {
    const url = `http://localhost:8080/api/papeis/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Papel>(url, {params, headers});
  }

  load(filter: PapelFilter): void {
    this.find(filter).subscribe(result => {
        this.papelList = result.items
        this.apiResponseWithPagination = result
      },
      err => {
        console.error('error loading', err);
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
      url = `http://www.angular.at/api/flight/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Papel>(url, entity, {headers, params});
    } else {
      url = `http://www.angular.at/api/flight`;
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
