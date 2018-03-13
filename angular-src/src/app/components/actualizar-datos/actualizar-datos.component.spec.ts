import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosComponent } from './actualizar-datos.component';

describe('ActualizarDatosComponent', () => {
  let component: ActualizarDatosComponent;
  let fixture: ComponentFixture<ActualizarDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
