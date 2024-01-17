import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGetSingleComponent } from './team-get-single.component';

describe('TeamGetSingleComponent', () => {
  let component: TeamGetSingleComponent;
  let fixture: ComponentFixture<TeamGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
