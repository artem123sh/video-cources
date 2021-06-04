import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  constructor(private router: Router, private authService: AuthService, private loaderService: LoaderService) {}

  private sub: Subscription;

  public email: string;

  public password: string;

  public login() {
    this.loaderService.setLoading(true);
    this.sub = this.authService.login(this.email, this.password).subscribe(() => {
      this.loaderService.setLoading(false);
      return this.router.navigate(['courses']);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
