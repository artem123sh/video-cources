import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../shared/shared.style.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService, private loaderService: LoaderService) {}

  private sub: Subscription;

  public userName: string;

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      this.loaderService.setLoading(true);
      if (isAuthenticated) {
        const user = this.authService.getUserInfo();
        this.userName = `${user.first} ${user.last}`;
      } else {
        this.userName = '';
      }
      this.loaderService.setLoading(false);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
