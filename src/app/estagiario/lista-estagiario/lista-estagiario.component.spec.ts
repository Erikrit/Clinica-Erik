import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstagiarioComponent } from './lista-estagiario.component';

describe('ListaEstagiarioComponent', () => {
  let component: ListaEstagiarioComponent;
  let fixture: ComponentFixture<ListaEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
