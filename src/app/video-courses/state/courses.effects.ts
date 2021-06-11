import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap, tap } from 'rxjs/operators';
import { VideoCoursesService } from '../services/video-courses.service';
import { Course } from '../shared/models/course.model';
import {
  getCourses,
  coursesLoaded,
  loadMore,
  loadedMoreCourses,
  deleteCourse,
  editCourse,
  addCourse,
} from './courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private videoCoursesService: VideoCoursesService,
    private store: Store<{ courses: { courses: Course[]; count: number } }>,
  ) {}

  getCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCourses),
      withLatestFrom(this.store.select((state) => state.courses.count)),
      mergeMap(([{ start, textFragment }, count]) =>
        this.videoCoursesService.getCourses(start, count, textFragment).pipe(
          map((courses) => coursesLoaded({ courses })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  loadMore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMore),
      withLatestFrom(
        this.store.select((state) => ({ start: state.courses.courses.length, count: state.courses.count })),
      ),
      mergeMap(([, { count, start }]) =>
        this.videoCoursesService.getCourses(start, count).pipe(
          map((courses) => loadedMoreCourses({ courses })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  deleteCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteCourse),
      withLatestFrom(
        this.store.select((state) => ({ start: state.courses.courses.length, count: state.courses.count })),
      ),
      mergeMap(([{ courseId }, { count, start }]) =>
        this.videoCoursesService.removeCourse(courseId).pipe(
          switchMap(() => this.videoCoursesService.getCourses(count, start)),
          map((courses) => coursesLoaded({ courses })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  editCourse$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(editCourse),
        mergeMap(({ course }) =>
          this.videoCoursesService.updateCourse(course).pipe(
            tap(() => this.router.navigate(['..'])),
            catchError(() => EMPTY),
          ),
        ),
      );
    },
    { dispatch: false },
  );

  createCourse$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addCourse),
        mergeMap(({ course }) =>
          this.videoCoursesService.createItem(course).pipe(
            tap(() => this.router.navigate(['..'])),
            catchError(() => EMPTY),
          ),
        ),
      );
    },
    { dispatch: false },
  );
}
