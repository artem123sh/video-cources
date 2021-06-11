import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from '../login/state/auth.reducer';
import { CoursesState, coursesReducer } from '../video-courses/state/courses.reducer';

interface AppState {
  courses: Readonly<CoursesState>;
  auth: Readonly<AuthState>;
}

export const appReducer: ActionReducerMap<AppState> = {
  courses: coursesReducer,
  auth: authReducer,
};
