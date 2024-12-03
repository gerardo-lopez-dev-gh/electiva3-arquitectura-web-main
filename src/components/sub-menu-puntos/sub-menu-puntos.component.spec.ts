import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuPuntosComponent } from './sub-menu-puntos.component';

describe('SubMenuPuntosComponent', () => {
  let component: SubMenuPuntosComponent;
  let fixture: ComponentFixture<SubMenuPuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubMenuPuntosComponent]
    });
    fixture = TestBed.createComponent(SubMenuPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
