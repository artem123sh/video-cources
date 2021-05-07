import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[vcIfAuthenticated]',
})
export class IfAuthenticatedDirective implements AfterViewInit, OnDestroy {
  @Input('vcIfAuthenticated') isAuthenticated: boolean;

  private sub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
    private cd: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.sub = this.authService.isAuthenticated.subscribe((isAuthenticated) => this.onAuthChange(isAuthenticated));
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private onAuthChange(isAuthenticated: boolean) {
    if (isAuthenticated === this.isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
