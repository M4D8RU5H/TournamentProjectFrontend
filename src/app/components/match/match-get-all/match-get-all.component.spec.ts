import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchGetAllComponent } from './match-get-all.component';

describe('MatchGetAllComponent', () => {
  let component: MatchGetAllComponent;
  let fixture: ComponentFixture<MatchGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
