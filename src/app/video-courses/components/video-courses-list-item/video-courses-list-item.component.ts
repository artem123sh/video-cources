import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-list-item',
  templateUrl: './video-courses-list-item.component.html',
  styleUrls: ['./video-courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCoursesListItemComponent {
  @Input()
  public course: Course;

  @Output()
  public deleteCourse = new EventEmitter();

  @Output()
  public editCourse = new EventEmitter();

  public handleEditClick() {
    this.editCourse.emit(this.course.id);
  }

  public handleDeleteClick() {
    this.deleteCourse.emit(this.course.id);
  }
}
