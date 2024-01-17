import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGetAllReceivedComponent } from './message-get-all-received.component';

describe('MessageGetAllComponent', () => {
  let component: MessageGetAllReceivedComponent;
  let fixture: ComponentFixture<MessageGetAllReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageGetAllReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageGetAllReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
