import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpleadoComponent } from './form-empleado.component';

describe('FormEmpleadoComponent', () => {
  let component: FormEmpleadoComponent;
  let fixture: ComponentFixture<FormEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
