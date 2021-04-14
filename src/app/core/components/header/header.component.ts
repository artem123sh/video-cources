import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../shared/shared.style.scss'],
})
export class HeaderComponent implements OnInit {
  public userName: string;

  ngOnInit(): void {
    this.userName = 'User login';
  }
}
