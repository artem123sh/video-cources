import { createReducer, on } from '@ngrx/store';
import { Course } from '../shared/models/course.model';

import {
  coursesLoaded,
  getCourses,
  loadMore,
  loadedMoreCourses,
  deleteCourse,
  editCourse,
  addCourse,
} from './courses.actions';

export interface CoursesState {
  loading: boolean;
  courses: Course[];
  canLoadMore: boolean;
  count: number;
}

const initialState: Readonly<CoursesState> = { courses: [], loading: false, canLoadMore: false, count: 3 };

export const coursesReducer = createReducer(
  initialState,
  on(coursesLoaded, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    canLoadMore: state.count === courses.length,
  })),
  on(getCourses, (state) => ({ ...state, loading: true })),
  on(loadedMoreCourses, (state, { courses: newCourses }) => ({
    ...state,
    courses: [...state.courses, ...newCourses],
    loading: false,
    canLoadMore: state.count === newCourses.length,
  })),
  on(loadMore, (state) => ({ ...state, loading: true })),
  on(deleteCourse, (state) => ({ ...state, loading: true })),
  on(editCourse, (state) => ({ ...state, loading: true })),
  on(addCourse, (state) => ({ ...state, loading: true })),
);
