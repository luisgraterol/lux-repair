import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRolComponent } from './gestionar-rol.component';

describe('GestionarRolComponent', () => {
  let component: GestionarRolComponent;
  let fixture: ComponentFixture<GestionarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
