import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRewardComponent } from './dialog-reward.component';

describe('DialogRewardComponent', () => {
  let component: DialogRewardComponent;
  let fixture: ComponentFixture<DialogRewardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRewardComponent]
    });
    fixture = TestBed.createComponent(DialogRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
