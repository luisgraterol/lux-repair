import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaEsperaComponent } from './cola-espera.component';

describe('ColaEsperaComponent', () => {
  let component: ColaEsperaComponent;
  let fixture: ComponentFixture<ColaEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
