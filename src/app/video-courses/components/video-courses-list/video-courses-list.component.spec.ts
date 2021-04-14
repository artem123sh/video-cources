import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesListComponent } from './video-courses-list.component';

describe('VideoCoursesListComponent', () => {
  let component: VideoCoursesListComponent;
  let fixture: ComponentFixture<VideoCoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCoursesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
