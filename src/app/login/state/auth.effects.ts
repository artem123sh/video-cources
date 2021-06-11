import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { login as loginAction, logout, authenticate, userLoaded } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  authenticate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authenticate),
      mergeMap(() =>
        this.authService.getUserInfo().pipe(
          map(({ id, name: { last, first }, login }) => userLoaded({ user: { id, first, last, login } })),
          tap(() => this.router.navigate(['/courses'])),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      mergeMap((action) =>
        this.authService.login(action.login, action.password).pipe(
          filter(({ token }) => !!token),
          map(() => authenticate()),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap(() => this.authService.logout()),
        tap(() => this.router.navigate(['/login'])),
      );
    },
    { dispatch: false },
  );
}
