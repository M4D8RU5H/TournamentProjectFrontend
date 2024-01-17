import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGetSingleMatchHistoryComponent } from './tournament-get-single-match-history.component';

describe('TournamentGetSingleMatchHistoryComponent', () => {
  let component: TournamentGetSingleMatchHistoryComponent;
  let fixture: ComponentFixture<TournamentGetSingleMatchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentGetSingleMatchHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGetSingleMatchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
