import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoCoursesService } from '../../services/video-courses.service';
import { Author, Course } from '../../shared/models/course.model';
import { editCourse } from '../../state/courses.actions';

@Component({
  selector: 'vc-video-courses-edit',
  templateUrl: './video-courses-edit.component.html',
  styleUrls: ['./video-courses-edit.component.scss'],
})
export class VideoCoursesEditComponent implements OnInit {
  constructor(
    private videoCoursesService: VideoCoursesService,
    private activeRoute: ActivatedRoute,
    private store: Store,
  ) {}

  public course: Observable<Course | null>;

  public authors: Observable<Author[] | null>;

  private id: number;

  ngOnInit(): void {
    this.course = this.activeRoute.params.pipe(
      switchMap((params: Params) => {
        this.id = parseInt(params.id, 10);
        return this.videoCoursesService.getCourseById(params.id);
      }),
    );

    this.authors = this.videoCoursesService.getAuthors();
  }

  public handleSave(course: Course): void {
    this.store.dispatch(editCourse({ course: { ...course, id: this.id } }));
  }
}
