import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms'; 
import { Orientador} from '../model/model.orientadores';
import {VincularOrientadorM} from '../model/modelVincular';
import { OrientadorService } from '../service/service.orientador';
import { EstagiarioService } from '../../estagiario/service/estagiario.service';
import { Estagiario } from '../../estagiario/model/estagiario.model';

@Component({
  selector: 'app-vincular-orientador',
  templateUrl: './vincular.orientador.html',
  styleUrls: ['./vincular.orientado.css']
})
export class VincularOrientador implements OnInit {

  public vincular : VincularOrientadorM = new VincularOrientadorM ();


    orientador :Orientador[];
    estagiario :Estagiario [];

    orientadorAx :Orientador[];
    estagiarioAx :Estagiario [];

        formulario :FormGroup;

            forms :FormGroupDirective;

  

  constructor(private jbl: FormBuilder,
              private service:OrientadorService,
              private estagiarios: EstagiarioService   ) { }

  ngOnInit() {
        
    this.service.getListaOrientador().subscribe((orientadorServices) => {
      this.orientador = orientadorServices;
      console.log('Sucesso!');
    },() => {
      console.log('Erro!');
    })

    this.estagiarios.getListaEstagiarios().subscribe((estagiariosServer) => {
      this.estagiario = estagiariosServer;
      console.log('Sucesso!');
    },() => {
      console.log('Erro!');
    })

    this.formulario = this.jbl.group({
      matricula:[null],
      nomeCompleto:[null],
      matriculaOrientadorV:[null],
      nomeCompletoOrientador:[null],
      dataI:[null],
      dataF:[null],

    });
  }


  public salvarVinculoTs(){
      this.vincular = {
        ...this.formulario.value
      };
      this.service.salvarVinculo(this.vincular)
      .subscribe( () =>{
        console.log('Gravado com sucesso');
      } , () => {
        console.log('Falhou!');
      });
      console.log(this.formulario.value);

  }
    

    
    
    excluir(id: number) {
      this.service.excluir(id).subscribe( () => {
        console.log('Item excluído com sucesso');
        this.service.getListaOrientador().subscribe((itens: Orientador[]) => {
          this.orientador = itens;
        })
      }, () => {
        console.log('Não foi possível excluir o item');
      })
    }




}