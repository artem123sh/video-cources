import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesFormComponent } from './video-courses-form.component';

describe('VideoCoursesFormComponent', () => {
  let component: VideoCoursesFormComponent;
  let fixture: ComponentFixture<VideoCoursesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCoursesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
