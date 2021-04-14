import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: string[];

  ngOnInit(): void {
    this.breadcrumbs = ['courses'];
  }
}
