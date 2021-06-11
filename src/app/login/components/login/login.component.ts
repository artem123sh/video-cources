import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../state/auth.actions';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store) {}

  public email: string;

  public password: string;

  public login() {
    this.store.dispatch(login({ login: this.email, password: this.password }));
  }
}
