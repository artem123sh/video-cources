import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<{ auth: { isAuth: boolean } }>) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store
      .select(({ auth: { isAuth } }) => isAuth)
      .pipe(
        map((isAuth) => {
          if (isAuth) {
            return true;
          }
          return this.router.parseUrl('/login');
        }),
      );
  }
}
