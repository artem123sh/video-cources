import { createReducer, on } from '@ngrx/store';

import { User } from '../shared/models/user.model';
import { logout, authenticate, userLoaded, loginError, clearLoginError } from './auth.actions';

export interface AuthState {
  user: User | null;
  isAuth: boolean;
  error: boolean;
}

const initialState: Readonly<AuthState> = { user: null, isAuth: false, error: false };

export const authReducer = createReducer(
  initialState,
  on(authenticate, (state) => ({ ...state, isAuth: true })),
  on(userLoaded, (state, { user }) => ({ ...state, user })),
  on(logout, (state) => ({ ...state, isAuth: false })),
  on(loginError, (state) => ({ ...state, isAuth: false, error: true })),
  on(clearLoginError, (state) => ({ ...state, error: false })),
);
