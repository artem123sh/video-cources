import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesLoadMoreComponent } from './video-courses-load-more.component';

describe('VideoCoursesLoadMoreComponent', () => {
  let component: VideoCoursesLoadMoreComponent;
  let fixture: ComponentFixture<VideoCoursesLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCoursesLoadMoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
