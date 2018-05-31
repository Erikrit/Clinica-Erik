import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Estagiario } from '../../model/estagiario.model';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms'; //1º Importar
import { EstagiarioService } from '../../service/estagiario.service';

@Component({
  selector: 'app-cadastro-estagiario',
  templateUrl: './cadastro-estagiario.component.html',
  styleUrls: ['./cadastro-estagiario.component.css']
})
export class CadastroEstagiarioComponent implements OnInit {

  @ViewChild(FormGroupDirective)
  form: FormGroupDirective;
  //2º Passo
  formulario: FormGroup;


  public estagiario: Estagiario = new Estagiario();
  
  //3º Passo: Adicionar o formBuilder
  constructor( 
    private estagiarioService: EstagiarioService,
    private formBuilder: FormBuilder
   ) {

  }

  //2º Passo
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

  setMatricula(event: any): void {
    this.estagiario.matricula = event.target.value;
  }

  setNomeCompleto(event: any): void {
    this.estagiario.nomeCompleto = event.target.value;
  }

  setTelefone(event: any): void {
    this.estagiario.telefoneResidencial = event.target.value;
  }

  setCelular(event: any): void {
    this.estagiario.celular = event.target.value;
 //   this.formulario.controls.celular.setValue(event.target.value, {emitEvent: false} )
  }

  setEmail(event: any): void {
    this.estagiario.email = event.target.value;
  }

  setPeriodo(event: any): void {
    this.estagiario.periodo = +event.target.value;
  }

  setTipoEstagio(event: any): void {
    this.estagiario.tipoEstagio = event.target.value;
  }

  setTurno(event: any): void {
    this.estagiario.turno = event.target.value;
  }

  gravarEstagiario(): void {
//    this.estagiarioService.gravarEstagiario(this.estagiario)
//      .subscribe(msg => {
//        console.log('gravado com sucesso');
//      });
    console.log(this.formulario.value);
  }

  onSubmit(): void {
    this.estagiario = {
      ...this.formulario.value
    }
    console.log(this.formulario);
    if(this.formulario.valid) {
      console.log('formulario valido');
    } else {
      console.log('formulario invalido');
    }

    if(this.formulario.valid) {
      this.estagiarioService.gravarEstagiario(this.estagiario)
                              .subscribe( () =>{
                                console.log('Gravado com sucesso');
                              } , () => {
                                console.log('Falhou!');
                              });
    }
  }


  isValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  cssError(campo) {
    return {
      'has-error' : this.isValidTouched(campo),
      'has-feedback': this.isValidTouched(campo)
    }
  }
}
