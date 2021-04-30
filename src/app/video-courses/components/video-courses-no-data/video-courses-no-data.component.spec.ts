import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesNoDataComponent } from './video-courses-no-data.component';

describe('VideoCoursesNoDataComponent', () => {
  let component: VideoCoursesNoDataComponent;
  let fixture: ComponentFixture<VideoCoursesNoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCoursesNoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
