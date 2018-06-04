import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms'; 
import { OrientadorService } from '../service/service.orientador';
import { Orientador } from '../model/model.orientadores';
@Component({
  selector: 'app-cadastro-orientadores',
  templateUrl: './cadastro.orientadores.html',
  styleUrls: ['./cadastro.orientadores.css']
})
export class CadastroOrientadores implements OnInit {
  @ViewChild(FormGroupDirective)
  
  form: FormGroupDirective;
  //2º Passo
  formulario: FormGroup;


    public orientador: Orientador = new Orientador;

  constructor(
    private serviceOrientador: OrientadorService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      matricula: ['', Validators.required],
      nomeCompleto: [''],
      telefone: [null],
      celular: [null],
      email: [null, Validators.email],
      turno:[null],
      periodo: [null],
      tipoEstagio: [null],
    }); 
  }

  gravarEstagiario(): void {
    //    this.estagiarioService.gravarEstagiario(this.estagiario)
    //      .subscribe(msg => {
    //        console.log('gravado com sucesso');
    //      });
        console.log(this.formulario.value);
      }


}
