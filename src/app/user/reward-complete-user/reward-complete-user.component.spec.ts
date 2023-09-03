import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCompleteUserComponent } from './reward-complete-user.component';

describe('RewardCompleteUserComponent', () => {
  let component: RewardCompleteUserComponent;
  let fixture: ComponentFixture<RewardCompleteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardCompleteUserComponent]
    });
    fixture = TestBed.createComponent(RewardCompleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
