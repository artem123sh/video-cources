import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
import { VideoCoursesService } from '../../services/video-courses.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-edit',
  templateUrl: './video-courses-edit.component.html',
  styleUrls: ['./video-courses-edit.component.scss'],
})
export class VideoCoursesEditComponent implements OnInit, OnDestroy {
  constructor(
    private videoCoursesService: VideoCoursesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {}

  public course: Course;

  private id: number;

  private subs = new Subscription();

  ngOnInit(): void {
    this.loaderService.setLoading(true);
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
          this.loaderService.setLoading(false);
        }
      });
    this.subs.add(sub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public handleSave(course: Course): void {
    this.loaderService.setLoading(true);
    const sub = this.videoCoursesService.updateCourse({ ...course, id: this.id }).subscribe(() => {
      this.router.navigate(['..']);
      this.loaderService.setLoading(false);
    });
    this.subs.add(sub);
  }
}
