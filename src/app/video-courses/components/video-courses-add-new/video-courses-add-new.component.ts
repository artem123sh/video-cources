import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Course } from '../../shared/models/course.model';
import { addCourse } from '../../state/courses.actions';

@Component({
  selector: 'vc-video-courses-add-new',
  templateUrl: './video-courses-add-new.component.html',
  styleUrls: ['./video-courses-add-new.component.scss'],
})
export class VideoCoursesAddNewComponent {
  constructor(private store: Store) {}

  public handleSave(course: Omit<Course, 'id'>) {
    this.store.dispatch(addCourse({ course }));
  }
}
