import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'vc-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumbs: { [title: string]: string }[];

  private sub: Subscription;

  public constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.breadcrumbs = this.getBreadcrumbs(this.route.root.children[0]?.snapshot);
    this.sub = this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(() => {
      const [route] = this.route.root.children;
      this.breadcrumbs = this.getBreadcrumbs(route.snapshot);
    });
  }

  private getBreadcrumbs(child: ActivatedRouteSnapshot): { link: string; title: string }[] {
    const breadcrumbs = [];
    if (child?.data.breadcrumb) {
      const title = child.data.breadcrumb;
      const [{ path: link = '' } = {}] = child.url;
      breadcrumbs.push({ title, link });
    }
    if (Array.isArray(child?.children)) {
      breadcrumbs.push(...this.getBreadcrumbs(child.children[0]));
    }
    return breadcrumbs
      .filter(({ link }) => link)
      .map(({ title }, index, arr) => ({
        title,
        link: arr
          .slice(0, index + 1)
          .map(({ link }) => link)
          .join('/'),
      }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
