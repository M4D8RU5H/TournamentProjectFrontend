import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGetSingleComponent } from './message-get-single.component';

describe('MessageGetSingleComponent', () => {
  let component: MessageGetSingleComponent;
  let fixture: ComponentFixture<MessageGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
