import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGetSingleTeamsComponent } from './tournament-get-single-teams.component';

describe('TournamentGetSingleTeamsComponent', () => {
  let component: TournamentGetSingleTeamsComponent;
  let fixture: ComponentFixture<TournamentGetSingleTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentGetSingleTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGetSingleTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
