import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDeleteComponent } from './tournament-delete.component';

describe('TournamentDeleteComponent', () => {
  let component: TournamentDeleteComponent;
  let fixture: ComponentFixture<TournamentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
