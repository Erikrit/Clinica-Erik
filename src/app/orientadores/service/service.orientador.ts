import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orientador } from '../model/model.orientadores';
import {VincularOrientadorM} from '../model/modelVincular';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { VincularOrientador } from '../vincular-orientador/vincular.orientador';

@Injectable()
export class OrientadorService {

  static gravarOrientador(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  private url: string = 'http://localhost:8080/api/orientador'
  private urlV: string = 'http://localhost:8080/api/orientador/vincular'

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

  salvarVinculo(vincularO :VincularOrientadorM):Observable<VincularOrientadorM>{
    return this.httpClient.post<VincularOrientadorM>(this.urlV,vincularO)


  }
  getListaVincular(): Observable<VincularOrientadorM[]> {
    return this.httpClient.get<VincularOrientadorM[]>(this.urlV);
  }

  public excluir(id: number): Observable<Orientador> {
    return this.httpClient.delete<Orientador>(this.url+'/'+id);
  }

  

}
