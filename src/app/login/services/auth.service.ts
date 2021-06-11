import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) {}

  isAuth(): boolean {
    return this.storage.has(TOKEN_KEY) && !!this.storage.get(TOKEN_KEY);
  }

  getUserToken(): string {
    return this.storage.get(TOKEN_KEY) || null;
  }

  getUserInfo() {
    const token = this.getUserToken();
    return this.http.post<any>(`${environment.apiUrl}/auth/userInfo`, token);
  }

  login(login: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}/auth/login`, {
        login,
        password,
      })
      .pipe(tap((token) => !!token && this.storage.set(TOKEN_KEY, token)));
  }

  logout(): void {
    this.storage.remove(TOKEN_KEY);
  }
}
