import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, BreadcrumbsComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, LoginModule],
  exports: [FooterComponent, HeaderComponent, BreadcrumbsComponent],
})
export class CoreModule {}
