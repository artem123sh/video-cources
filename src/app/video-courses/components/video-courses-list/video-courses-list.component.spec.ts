import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should display course entities', () => {
    const items = fixture.debugElement.queryAll(By.css('vc-video-courses-list-item'));
    expect(items.length).toBe(component.courses.length);
  });

  it('should delete list by id', () => {
    const initialLength = component.courses.length;
    const { id } = component.courses[Math.floor(Math.random() * initialLength)];
    component.deleteCourse(id);
    expect(component.courses.length).toBe(initialLength - 1);
  });

  it('should edit component', () => {
    const { id } = component.courses[Math.floor(Math.random() * component.courses.length)];
    const spy = spyOn(console, 'log');
    component.editCourse(id);
    expect(spy).toHaveBeenCalledWith(`Edit ${id}`);
  });
});
