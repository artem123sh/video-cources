import { createAction, props } from '@ngrx/store';
import { Course } from '../shared/models/course.model';

const GET_COURSES = 'GET_COURSES';

const DELETE_COURSES = 'DELETE_COURSES';

const EDIT_COURSE = 'EDIT_COURSE';

const ADD_COURSE = 'ADD_COURSE';

const COURSES_LOADED = 'COURSES_LOADED';

const LOAD_MORE = 'LOAD_MORE';

const LOADED_MORE_COURSES = 'LOADED_MORE_COURSES';

export const getCourses = createAction(GET_COURSES, props<{ start: number; textFragment: string }>());

export const deleteCourse = createAction(DELETE_COURSES, props<{ courseId: string }>());

export const coursesLoaded = createAction(COURSES_LOADED, props<{ courses: Course[] }>());

export const loadMore = createAction(LOAD_MORE);

export const loadedMoreCourses = createAction(LOADED_MORE_COURSES, props<{ courses: Course[] }>());

export const editCourse = createAction(EDIT_COURSE, props<{ course: Course }>());

export const addCourse = createAction(ADD_COURSE, props<{ course: Omit<Course, 'id'> }>());
