import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRolComponent } from './asignar-rol.component';

describe('AsignarRolComponent', () => {
  let component: AsignarRolComponent;
  let fixture: ComponentFixture<AsignarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
