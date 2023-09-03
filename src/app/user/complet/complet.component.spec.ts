import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletComponent } from './complet.component';

describe('CompletComponent', () => {
  let component: CompletComponent;
  let fixture: ComponentFixture<CompletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletComponent]
    });
    fixture = TestBed.createComponent(CompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
