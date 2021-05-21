import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCoursesListComponent } from './components/video-courses-list/video-courses-list.component';
import { VideoCoursesAddNewComponent } from './components/video-courses-add-new/video-courses-add-new.component';
import { VideoCoursesEditComponent } from './components/video-courses-edit/video-courses-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: VideoCoursesListComponent },
  { path: 'new', pathMatch: 'full', component: VideoCoursesAddNewComponent, data: { breadcrumb: 'new' } },
  { path: ':id', pathMatch: 'full', component: VideoCoursesEditComponent, data: { breadcrumb: 'edit' } },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCoursesRoutingModule {}
