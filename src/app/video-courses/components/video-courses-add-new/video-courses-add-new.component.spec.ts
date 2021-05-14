import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesAddNewComponent } from './video-courses-add-new.component';

describe('VideoCoursesAddNewComponent', () => {
  let component: VideoCoursesAddNewComponent;
  let fixture: ComponentFixture<VideoCoursesAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCoursesAddNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
