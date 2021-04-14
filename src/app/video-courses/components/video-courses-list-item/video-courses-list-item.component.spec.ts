import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesListItemComponent } from './video-courses-list-item.component';

describe('VideoCoursesListItemComponent', () => {
  let component: VideoCoursesListItemComponent;
  let fixture: ComponentFixture<VideoCoursesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCoursesListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
