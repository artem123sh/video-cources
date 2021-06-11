import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user.model';

const AUTHENTICATE = 'AUTHENTICATE';

const LOGIN = 'LOGIN';

const LOGOUT = 'LOGOUT';

const USER_LOADED = 'USER_LOADED';

export const authenticate = createAction(AUTHENTICATE);

export const login = createAction(LOGIN, props<{ login: string; password: string }>());

export const logout = createAction(LOGOUT);

export const userLoaded = createAction(USER_LOADED, props<{ user: User }>());
