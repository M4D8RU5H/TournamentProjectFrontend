import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGetSingleComponent } from './report-get-single.component';

describe('ReportGetSingleComponent', () => {
  let component: ReportGetSingleComponent;
  let fixture: ComponentFixture<ReportGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
