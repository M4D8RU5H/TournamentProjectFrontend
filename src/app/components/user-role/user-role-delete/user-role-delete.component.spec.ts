import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleDeleteComponent } from './user-role-delete.component';

describe('UserRoleDeleteComponent', () => {
  let component: UserRoleDeleteComponent;
  let fixture: ComponentFixture<UserRoleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
