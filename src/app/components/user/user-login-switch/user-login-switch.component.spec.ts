import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginSwitchComponent } from './user-login-switch.component';

describe('UserLoginSwitchComponent', () => {
  let component: UserLoginSwitchComponent;
  let fixture: ComponentFixture<UserLoginSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
