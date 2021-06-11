import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Subject, Observable } from 'rxjs';
import { filter, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { Course } from '../../shared/models/course.model';
import { getCourses, loadMore, deleteCourse } from '../../state/courses.actions';

@Component({
  selector: 'vc-video-courses-list',
  templateUrl: './video-courses-list.component.html',
  styleUrls: ['./video-courses-list.component.scss'],
})
export class VideoCoursesListComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  public courses: Course[] = [];

  private searchSubject: Subject<string>;

  constructor(private store: Store<{ courses: { courses: Course[]; canLoadMore: boolean } }>) {}

  courses$: Observable<Course[]>;

  canLoadMore$: Observable<boolean>;

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.searchSubject = new Subject<string>();
    this.store.dispatch(getCourses({ start: 0, textFragment: '' }));
    this.courses$ = this.store.select((state) => state.courses.courses);
    this.canLoadMore$ = this.store.select((state) => state.courses.canLoadMore);
    const searchObservable = this.searchSubject
      .pipe(
        filter((text: string) => text === '' || (!!text && text.length > 2)),
        distinctUntilChanged(),
        throttleTime(300),
      )
      .subscribe((text) => this.store.dispatch(getCourses({ start: 0, textFragment: text })));
    this.subs.add(searchObservable);
  }

  // eslint-disable-next-line class-methods-use-this
  identify(index: number, course: Course) {
    return course.id;
  }

  public deleteCourse(courseId: string) {
    if (window.confirm('Do you really want to delete this course?')) {
      this.store.dispatch(deleteCourse({ courseId }));
    }
  }

  public search(searchCriteria: string) {
    this.searchSubject.next(searchCriteria);
  }

  public loadMore() {
    this.store.dispatch(loadMore());
  }
}
