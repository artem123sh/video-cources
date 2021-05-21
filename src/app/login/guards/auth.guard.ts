import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {}

  canActivate(): Promise<boolean> | Observable<boolean | UrlTree> | boolean {
    return this.authService.isAuthenticated.pipe(
      map((isAuth) => {
        if (isAuth) {
          return true;
        }
        return this.router.parseUrl('/login');
      }),
    );
  }
}
