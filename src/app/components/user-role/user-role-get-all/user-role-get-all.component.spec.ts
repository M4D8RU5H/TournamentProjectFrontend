import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleGetAllComponent } from './user-role-get-all.component';

describe('UserRoleGetAllComponent', () => {
  let component: UserRoleGetAllComponent;
  let fixture: ComponentFixture<UserRoleGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
