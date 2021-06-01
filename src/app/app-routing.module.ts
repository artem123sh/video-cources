import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  {
    path: 'courses',
    loadChildren: () => import('./video-courses/courses.module').then((m) => m.VideoCoursesModule),
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Courses' },
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
