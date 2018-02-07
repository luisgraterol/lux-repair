import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculoComponent } from './form-vehiculo.component';

describe('FormVehiculoComponent', () => {
  let component: FormVehiculoComponent;
  let fixture: ComponentFixture<FormVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
