import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEstagiarioComponent } from './cadastro-estagiario.component';

describe('CadastroEstagiarioComponent', () => {
  let component: CadastroEstagiarioComponent;
  let fixture: ComponentFixture<CadastroEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
