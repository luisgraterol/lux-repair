import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReparacionComponent } from './lista-reparacion.component';

describe('ListaReparacionComponent', () => {
  let component: ListaReparacionComponent;
  let fixture: ComponentFixture<ListaReparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
