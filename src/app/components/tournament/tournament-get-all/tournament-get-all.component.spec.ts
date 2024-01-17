import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGetAllComponent } from './tournament-get-all.component';

describe('TournamentGetAllComponent', () => {
  let component: TournamentGetAllComponent;
  let fixture: ComponentFixture<TournamentGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
