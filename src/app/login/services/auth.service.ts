import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../shared/models/user.model';

const USER_KEY = 'user';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  private isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.storage.has(TOKEN_KEY) && !!this.storage.get(TOKEN_KEY),
  );

  getUserInfo(): User {
    return this.storage.get(USER_KEY) || null;
  }

  login(login: string, password: string): void {
    this.storage.set(USER_KEY, { id: uuidv4(), firstName: login, lastName: login });
    this.storage.set(TOKEN_KEY, uuidv4());
    this.isAuth.next(true);
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
