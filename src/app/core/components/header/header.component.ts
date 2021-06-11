import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/login/shared/models/user.model';
import { logout } from 'src/app/login/state/auth.actions';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../shared/shared.style.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ auth: { user: User } }>) {}

  private sub: Subscription;

  public userName: string;

  ngOnInit(): void {
    this.sub = this.store
      .select(({ auth: { user } }) => user)
      .subscribe((user) => {
        if (user) {
          this.userName = `${user.first} ${user.last}`;
        } else {
          this.userName = '';
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
