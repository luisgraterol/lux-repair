import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrdenComponent } from './actualizar-orden.component';

describe('ActualizarOrdenComponent', () => {
  let component: ActualizarOrdenComponent;
  let fixture: ComponentFixture<ActualizarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
