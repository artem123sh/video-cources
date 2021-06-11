import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoCoursesService } from '../../services/video-courses.service';
import { Course } from '../../shared/models/course.model';
import { editCourse } from '../../state/courses.actions';

@Component({
  selector: 'vc-video-courses-edit',
  templateUrl: './video-courses-edit.component.html',
  styleUrls: ['./video-courses-edit.component.scss'],
})
export class VideoCoursesEditComponent implements OnInit, OnDestroy {
  constructor(
    private videoCoursesService: VideoCoursesService,
    private activeRoute: ActivatedRoute,
    private store: Store,
  ) {}

  public course: Course;

  private id: number;

  private subs = new Subscription();

  ngOnInit(): void {
    const sub = this.activeRoute.params
      .pipe(
        switchMap((params: Params) => {
          this.id = parseInt(params.id, 10);
          return this.videoCoursesService.getCourseById(params.id);
        }),
      )
      .subscribe((course) => {
        if (course) {
          this.course = course;
        }
      });
    this.subs.add(sub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public handleSave(course: Course): void {
    this.store.dispatch(editCourse({ course: { ...course, id: this.id } }));
  }
}
