import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../shared/shared.style.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  private sub: Subscription;

  public userName: string;

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        const user = this.authService.getUserInfo();
        this.userName = `${user.firstName} ${user.lastName}`;
      } else {
        this.userName = '';
      }
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
