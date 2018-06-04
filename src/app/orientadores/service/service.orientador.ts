import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orientador } from '../model/model.orientadores';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OrientadorService {

  private url: string = 'http://localhost:8080/api/estagiario'
  

  constructor(
    private httpClient: HttpClient
  ) { }

  //gravando os dados no servidor
  gravarEstagiario(estagiario: Orientador): Observable<Orientador> {
    return this.httpClient.post<Orientador>(this.url, estagiario);
  }

  //recuperando os dados do servidor
  getListaEstagiarios(): Observable<Orientador[]> {
    return this.httpClient.get<Orientador[]>(this.url);
  }



}
