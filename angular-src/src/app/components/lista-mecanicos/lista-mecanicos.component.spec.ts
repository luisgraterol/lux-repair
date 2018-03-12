import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMecanicosComponent } from './lista-mecanicos.component';

describe('ListaMecanicosComponent', () => {
  let component: ListaMecanicosComponent;
  let fixture: ComponentFixture<ListaMecanicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMecanicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
