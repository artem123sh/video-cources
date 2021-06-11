import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './login/services/auth.service';
import { authenticate } from './login/state/auth.actions';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private store: Store) {}

  title = 'video-courses';

  ngOnInit(): void {
    const isAuth = this.authService.isAuth();
    if (isAuth) {
      this.store.dispatch(authenticate());
    }
  }
}
