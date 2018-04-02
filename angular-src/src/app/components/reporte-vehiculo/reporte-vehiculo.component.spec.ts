import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteVehiculoComponent } from './reporte-vehiculo.component';

describe('ReporteVehiculoComponent', () => {
  let component: ReporteVehiculoComponent;
  let fixture: ComponentFixture<ReporteVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
