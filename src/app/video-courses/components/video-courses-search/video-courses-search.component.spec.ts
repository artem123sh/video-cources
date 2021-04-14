import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesSearchComponent } from './video-courses-search.component';

describe('VideoCoursesSearchComponent', () => {
  let component: VideoCoursesSearchComponent;
  let fixture: ComponentFixture<VideoCoursesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCoursesSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
