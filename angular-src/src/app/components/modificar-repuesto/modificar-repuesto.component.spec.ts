import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRepuestoComponent } from './modificar-repuesto.component';

describe('ModificarRepuestoComponent', () => {
  let component: ModificarRepuestoComponent;
  let fixture: ComponentFixture<ModificarRepuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRepuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
