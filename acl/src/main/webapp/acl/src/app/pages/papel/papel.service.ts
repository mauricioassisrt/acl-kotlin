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

  url:string = `${environment.api}/api/papeis/`
  private loadingSubject = new Subject<boolean>();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Papel> {
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Papel>(`${this.url}${id}`, {params, headers});
  }

  load(filter: PapelFilter, numeroPagina:number): Observable<ApiResponseWithPagination<Papel>> {
    this.loadingSubject.next(true); // Ative o indicador de carregamento

    return new Observable<ApiResponseWithPagination<Papel>>(observer => {
      this.find(filter,numeroPagina ).subscribe(
        result => {
          const parametrosPagina: ApiResponseWithPagination<Papel> = {
            currentPage: result.currentPage,
            items: result.items,
            totalItems: result.totalItems,
            totalPages: result.totalPages,
          };

          this.loadingSubject.next(false); // Desative o indicador após o carregamento

          observer.next(parametrosPagina); // Emita o valor para o observer
          observer.complete(); // Complete o Observable após emitir o valor
        },
        error => {
          this.loadingSubject.next(false); // Lida com erros também
          observer.error(error); // Transmita o erro para o observer, se necessário
          observer.complete(); // Complete o Observable em caso de erro
        }
      );
    });
  }



  find(filter: PapelFilter, numeroPagina: number): Observable<ApiResponseWithPagination<Papel>> {
    let queryParams = `page=${numeroPagina}`;

    if (filter.nome) {
      queryParams += `&nome=${filter.nome}`;
    }

    if (filter.descricao) {
      queryParams += `&descricao=${filter.descricao}`;
    }

    if (filter.sortOrder) {
      queryParams += `&sortOrder=${filter.sortOrder}`;
    }
    if (filter.sortBy) {
      queryParams += `&sortBy=${filter.sortBy}`;
    }


    return this.http.get<ApiResponseWithPagination<Papel>>(`${this.url}?${queryParams}`);
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
