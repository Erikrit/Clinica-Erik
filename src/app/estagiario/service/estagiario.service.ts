import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estagiario } from '../model/estagiario.model';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class EstagiarioService {

  private url: string = 'http://localhost:8080/api/estagiario'
  

  constructor(
    private httpClient: HttpClient
  ) { }

  //gravando os dados no servidor
  gravarEstagiario(estagiario: Estagiario): Observable<Estagiario> {
    return this.httpClient.post<Estagiario>(this.url, estagiario);
  }

  //recuperando os dados do servidor
  getListaEstagiarios(): Observable<Estagiario[]> {
    return this.httpClient.get<Estagiario[]>(this.url);
  }

  public excluir(id: number): Observable<Estagiario> {
    return this.httpClient.delete<Estagiario>(this.url+'/'+id);
  }



}
