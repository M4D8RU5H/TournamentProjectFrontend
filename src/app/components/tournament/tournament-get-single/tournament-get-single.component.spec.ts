import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGetSingleComponent } from './tournament-get-single.component';

describe('TournamentGetSingleComponent', () => {
  let component: TournamentGetSingleComponent;
  let fixture: ComponentFixture<TournamentGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
