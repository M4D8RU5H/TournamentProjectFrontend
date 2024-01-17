import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentGetAllComponent } from './comment-get-all.component';

describe('CommentGetAllComponent', () => {
  let component: CommentGetAllComponent;
  let fixture: ComponentFixture<CommentGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
