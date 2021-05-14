import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-add-new',
  templateUrl: './video-courses-add-new.component.html',
  styleUrls: ['./video-courses-add-new.component.scss'],
})
export class VideoCoursesAddNewComponent {
  @Output()
  public closeAddNewCourse = new EventEmitter();

  @Output()
  public addNewCourse = new EventEmitter();

  public handleClose() {
    this.closeAddNewCourse.emit();
  }

  public handleSave(course: Course) {
    this.addNewCourse.emit(course);
  }
}
