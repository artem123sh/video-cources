import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../shared/models/course.model';

import { VideoCoursesListItemComponent } from './video-courses-list-item.component';
import { HourMinutesDuration } from './hh-mm-duration.pipe';

describe('VideoCoursesListItemComponent', () => {
  let component: VideoCoursesListItemComponent;
  let fixture: ComponentFixture<VideoCoursesListItemComponent>;
  let expectedCourse: Course;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCoursesListItemComponent, HourMinutesDuration],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesListItemComponent);
    component = fixture.componentInstance;
    expectedCourse = {
      id: 'test',
      description: 'description',
      createdDate: '2020-01-01',
      duration: 65,
      title: 'test',
    };
    component.course = expectedCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display duration correctly', () => {
    const duration = fixture.debugElement.query(By.css('span')).nativeElement.textContent;
    expect(duration).toBe('1h 5min');
  });

  it('should emit edit event', () => {
    spyOn(component.editCourse, 'emit');
    fixture.debugElement.queryAll(By.css('button'))[0].triggerEventHandler('click', null);
    expect(component.editCourse.emit).toHaveBeenCalledWith(expectedCourse.id);
  });

  it('should emit delete event', () => {
    spyOn(component.deleteCourse, 'emit');
    fixture.debugElement.queryAll(By.css('button'))[1].triggerEventHandler('click', null);
    expect(component.deleteCourse.emit).toHaveBeenCalledWith(expectedCourse.id);
  });
});
