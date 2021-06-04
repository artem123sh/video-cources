import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { filter, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
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

  private searchSubject: Subject<string>;

  constructor(private videoCoursesService: VideoCoursesService, private loadingService: LoaderService) {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.searchSubject = new Subject<string>();
    this.getVideoCourses();
    this.loadingService.setLoading(true);
    const searchObservable = this.searchSubject
      .pipe(
        filter((text: string) => text === '' || (!!text && text.length > 2)),
        distinctUntilChanged(),
        throttleTime(300),
      )
      .subscribe((text) => this.getVideoCourses(text));
    this.subs.add(searchObservable);
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
    this.searchSubject.next(searchCriteria);
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

  private getVideoCourses(searchCriteria: string = '') {
    const sub = this.videoCoursesService.getCourses(0, this.coursesChunkSize, searchCriteria).subscribe((courses) => {
      this.courses = courses;
    });
    this.subs.add(sub);
  }
}
