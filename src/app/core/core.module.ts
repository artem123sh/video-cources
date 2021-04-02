import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, BreadcrumbsComponent, LogoComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, BreadcrumbsComponent, LogoComponent],
})
export class CoreModule {}
