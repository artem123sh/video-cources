import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCoursesModule } from './video-courses/courses.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VideoCoursesModule, CoreModule, BrowserAnimationsModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
