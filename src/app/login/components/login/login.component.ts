import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearLoginError, login } from '../../state/auth.actions';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<{ auth: { error: boolean } }>) {}

  error$: Observable<boolean>;

  ngOnInit(): void {
    this.error$ = this.store.select(({ auth: { error } }) => error);
  }

  public email: string;

  public password: string;

  public login() {
    this.store.dispatch(clearLoginError());
    this.store.dispatch(login({ login: this.email, password: this.password }));
  }
}
