import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoPuntosComponent } from './uso-puntos.component';

describe('UsoPuntosComponent', () => {
  let component: UsoPuntosComponent;
  let fixture: ComponentFixture<UsoPuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsoPuntosComponent]
    });
    fixture = TestBed.createComponent(UsoPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
