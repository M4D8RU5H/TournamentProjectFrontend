import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetSingleComponent } from './user-get-single.component';

describe('UserGetSingleComponent', () => {
  let component: UserGetSingleComponent;
  let fixture: ComponentFixture<UserGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
