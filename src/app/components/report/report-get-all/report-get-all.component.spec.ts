import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGetAllComponent } from './report-get-all.component';

describe('ReportGetAllComponent', () => {
  let component: ReportGetAllComponent;
  let fixture: ComponentFixture<ReportGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
