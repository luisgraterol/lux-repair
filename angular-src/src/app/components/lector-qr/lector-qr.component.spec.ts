import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorQrComponent } from './lector-qr.component';

describe('LectorQrComponent', () => {
  let component: LectorQrComponent;
  let fixture: ComponentFixture<LectorQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectorQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
