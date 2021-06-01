import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public email: string;

  public password: string;

  public login() {
    this.authService.login(this.email, this.password);
    this.router.navigate(['courses']);
  }
}
