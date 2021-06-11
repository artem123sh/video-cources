import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthEffects } from './login/state/auth.effects';
import { CoursesEffects } from './video-courses/state/courses.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCoursesModule } from './video-courses/courses.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { appReducer } from './state/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    VideoCoursesModule,
    CoreModule,
    BrowserAnimationsModule,
    LoginModule,
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production, maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
