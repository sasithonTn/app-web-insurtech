import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCompletComponent } from './navbar-complet.component';

describe('NavbarCompletComponent', () => {
  let component: NavbarCompletComponent;
  let fixture: ComponentFixture<NavbarCompletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCompletComponent]
    });
    fixture = TestBed.createComponent(NavbarCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
