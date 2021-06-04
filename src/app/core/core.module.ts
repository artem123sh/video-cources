import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginModule } from '../login/login.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, BreadcrumbsComponent, NotFoundComponent, LoaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LoginModule,
    MatProgressSpinnerModule,
  ],
  exports: [FooterComponent, HeaderComponent, BreadcrumbsComponent, NotFoundComponent, LoaderComponent],
})
export class CoreModule {}
