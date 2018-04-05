import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteModeloComponent } from './reporte-modelo.component';

describe('ReporteModeloComponent', () => {
  let component: ReporteModeloComponent;
  let fixture: ComponentFixture<ReporteModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
