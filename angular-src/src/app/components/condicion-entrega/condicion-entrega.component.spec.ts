import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionEntregaComponent } from './condicion-entrega.component';

describe('CondicionEntregaComponent', () => {
  let component: CondicionEntregaComponent;
  let fixture: ComponentFixture<CondicionEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
