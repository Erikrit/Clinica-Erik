import { Component, OnInit } from '@angular/core';
import { Orientador } from '../model/model.orientadores';
import { OrientadorService } from '../service/service.orientador';

@Component({
  selector: 'app-lista-orientadores',
  templateUrl: './lista.orientadores.html',
  styleUrls: ['./lista.orientadores.css']
})
export class ListaOrientadores implements OnInit {

  public orientadores :Orientador [];
  
  constructor(
    private  orientadorService: OrientadorService
  ) { }

  ngOnInit() {
    this.orientadorService.getListaOrientador().subscribe((orientadorServices) => {
      this.orientadores = orientadorServices;
      console.log('Sucesso!');
    },() => {
      console.log('Erro!');
    })
  }

}