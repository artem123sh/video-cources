import { createReducer, on } from '@ngrx/store';

import { User } from '../shared/models/user.model';
import { logout, authenticate, userLoaded } from './auth.actions';

export interface AuthState {
  user: User | null;
  isAuth: boolean;
}

const initialState: Readonly<AuthState> = { user: null, isAuth: false };

export const authReducer = createReducer(
  initialState,
  on(authenticate, (state) => ({ ...state, isAuth: true })),
  on(userLoaded, (state, { user }) => ({ ...state, user })),
  on(logout, (state) => ({ ...state, isAuth: false })),
);
