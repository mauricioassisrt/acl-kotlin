import { Injectable } from '@angular/core';
import {Papel} from "./papel";
import {EMPTY, Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PapelFilter} from "./papel-filter";
import {ApiResponseWithPagination} from "../../util/pagination/ApiResponseWithPagination";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PapelService {
  papelList: Papel[] = [];
  url:string = `${environment.api}/api/papeis/`
  apiResponseWithPagination: {}  = {}
  private loadingSubject = new Subject<boolean>();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Papel> {
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Papel>(`${this.url}${id}`, {params, headers});
  }

  load(filter: PapelFilter): void {
    this.loadingSubject.next(true); // Ative o indicador de carregamento
    this.find(filter).subscribe(result => {
        this.papelList = result.items
        this.apiResponseWithPagination = result
        this.loadingSubject.next(false); // Desative o indicador após o carregamento
      },
      () => {
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

    return this.http.get<ApiResponseWithPagination<Papel>>(this.url)
  }

  save(entity: Papel): Observable<Papel> {
    let params = new HttpParams();
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Papel>( `${this.url}${entity.id.toString()}`, entity, {headers, params});
    } else {
      return this.http.post<Papel>( `${this.url}`, entity, {headers, params});
    }
  }

  delete(entity: Papel): Observable<Papel> {
    let params = new HttpParams();
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Papel>(`${this.url}${entity.id.toString()}`, {headers, params});
    }
    return EMPTY;
  }
}
