import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsasComponent } from './bolsas.component';

describe('BolsasComponent', () => {
  let component: BolsasComponent;
  let fixture: ComponentFixture<BolsasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolsasComponent]
    });
    fixture = TestBed.createComponent(BolsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
