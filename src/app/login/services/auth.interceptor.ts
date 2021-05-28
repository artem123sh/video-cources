import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getUserToken();
    if (token) {
      const requestWithAuth = request.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      return next.handle(requestWithAuth);
    }
    return next.handle(request);
  }
}
