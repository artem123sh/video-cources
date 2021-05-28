import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoCoursesService } from '../../services/video-courses.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-list',
  templateUrl: './video-courses-list.component.html',
  styleUrls: ['./video-courses-list.component.scss'],
})
export class VideoCoursesListComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  public courses: Course[] = [];

  public isFullyLoaded = false;

  private coursesChunkSize = 3;

  constructor(
    private videoCoursesService: VideoCoursesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.getVideoCourses();
  }

  // eslint-disable-next-line class-methods-use-this
  identify(index: number, course: Course) {
    return course.id;
  }

  public deleteCourse(courseId: string) {
    if (window.confirm('Do you really want to delete this course?')) {
      const removeSub = this.videoCoursesService.removeCourse(courseId).subscribe(() => {
        this.getVideoCourses();
      });
      this.subs.add(removeSub);
    }
  }

  public search(searchCriteria: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: searchCriteria || null,
      },
      queryParamsHandling: 'merge',
    });
  }

  public loadMore() {
    const getSub = this.videoCoursesService
      .getCourses(this.courses.length, this.coursesChunkSize)
      .subscribe((courses) => {
        if (courses.length < this.coursesChunkSize) {
          this.isFullyLoaded = true;
        }
        this.courses = [...this.courses, ...courses];
      });
    this.subs.add(getSub);
  }

  private getVideoCourses() {
    const sub = this.route.queryParams
      .pipe(switchMap((params: Params) => this.videoCoursesService.getCourses(0, this.coursesChunkSize, params.search)))
      .subscribe((courses) => {
        this.courses = courses;
      });
    this.subs.add(sub);
  }
}
