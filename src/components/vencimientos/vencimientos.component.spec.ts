import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencimientosComponent } from './vencimientos.component';

describe('VencimientosComponent', () => {
  let component: VencimientosComponent;
  let fixture: ComponentFixture<VencimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VencimientosComponent]
    });
    fixture = TestBed.createComponent(VencimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
