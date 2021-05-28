import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, BehaviorSubject } from 'rxjs';

import { switchMap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../shared/models/user.model';

const USER_KEY = 'user';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) {}

  private isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.storage.has(TOKEN_KEY) && !!this.storage.get(TOKEN_KEY),
  );

  getUserInfo(): User {
    return this.storage.get(USER_KEY) || null;
  }

  getUserToken(): string {
    return this.storage.get(TOKEN_KEY) || null;
  }

  login(login: string, password: string): Observable<void> {
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}/auth/login`, {
        login,
        password,
      })
      .pipe(
        switchMap((token) => {
          this.storage.set(TOKEN_KEY, token);
          return this.http.post<any>(`${environment.apiUrl}/auth/userInfo`, token);
        }),
      )
      .pipe(
        map((user) => {
          this.storage.set(USER_KEY, { ...user.name, id: user.id, login: user.login });
          this.isAuth.next(true);
        }),
      );
  }

  logout(): void {
    this.storage.remove(USER_KEY);
    this.storage.remove(TOKEN_KEY);
    this.isAuth.next(false);
  }

  get isAuthenticated() {
    return this.isAuth.asObservable();
  }
}
