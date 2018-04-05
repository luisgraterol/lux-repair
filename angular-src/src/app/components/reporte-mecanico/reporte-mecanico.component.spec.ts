import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMecanicoComponent } from './reporte-mecanico.component';

describe('ReporteMecanicoComponent', () => {
  let component: ReporteMecanicoComponent;
  let fixture: ComponentFixture<ReporteMecanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteMecanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
