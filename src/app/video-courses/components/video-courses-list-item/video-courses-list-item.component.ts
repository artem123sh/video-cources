import {
  Component,
  Input,
  EventEmitter,
  Output,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-list-item',
  templateUrl: './video-courses-list-item.component.html',
  styleUrls: ['./video-courses-list-item.component.scss'],
})
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
export class VideoCoursesListItemComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input()
  public course: Course;

  @Output()
  deleteCourse = new EventEmitter();

  @Output()
  editCourse = new EventEmitter();

  public handleEditClick() {
    this.editCourse.emit(this.course.id);
  }

  public handleDeleteClick() {
    this.deleteCourse.emit(this.course.id);
  }

  // TODO: remove after hw2 task is merged

  ngOnChanges() {
    console.log(this.course.title, 'ngOnChanges');
  }

  ngOnInit() {
    console.log(this.course.title, 'ngOnInit');
  }

  ngDoCheck() {
    console.log(this.course.title, 'ngDoCheck');
  }

  ngAfterContentInit() {
    console.log(this.course.title, 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log(this.course.title, 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log(this.course.title, 'ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log(this.course.title, 'ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log(this.course.title, 'ngOnDestroy');
  }
  // TODO: end
}
