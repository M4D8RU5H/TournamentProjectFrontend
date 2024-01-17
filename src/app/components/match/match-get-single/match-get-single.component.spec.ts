import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchGetSingleComponent } from './match-get-single.component';

describe('MatchGetSingleComponent', () => {
  let component: MatchGetSingleComponent;
  let fixture: ComponentFixture<MatchGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
