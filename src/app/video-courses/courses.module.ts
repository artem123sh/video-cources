import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { VideoCoursesComponent } from './components/video-courses.component';
import { VideoCoursesListComponent } from './components/video-courses-list/video-courses-list.component';
import { VideoCoursesListItemComponent } from './components/video-courses-list-item/video-courses-list-item.component';
import { VideoCoursesSearchComponent } from './components/video-courses-search/video-courses-search.component';
import { VideoCoursesLoadMoreComponent } from './components/video-courses-load-more/video-courses-load-more.component';
import { HourMinutesDuration } from './components/video-courses-list-item/hh-mm-duration.pipe';

@NgModule({
  declarations: [
    VideoCoursesComponent,
    VideoCoursesSearchComponent,
    VideoCoursesListComponent,
    VideoCoursesListComponent,
    VideoCoursesListItemComponent,
    VideoCoursesLoadMoreComponent,
    HourMinutesDuration,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, FormsModule],
  exports: [VideoCoursesComponent],
})
export class VideoCoursesModule {}
