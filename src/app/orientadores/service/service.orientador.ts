import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orientador } from '../model/model.orientadores';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OrientadorService {

  static gravarOrientador(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  private url: string = 'http://localhost:8080/api/orientador'
  

  constructor(
    private httpClient: HttpClient
  ) { }

  //gravando os dados no servidor
  gravarOrientador(orientador: Orientador): Observable<Orientador> {
    return this.httpClient.post<Orientador>(this.url, orientador);
  }

  //recuperando os dados do servidor
  getListaOrientador(): Observable<Orientador[]> {
    return this.httpClient.get<Orientador[]>(this.url);
  }



}
