import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarOrdenComponent } from './solicitar-orden.component';

describe('SolicitarOrdenComponent', () => {
  let component: SolicitarOrdenComponent;
  let fixture: ComponentFixture<SolicitarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
