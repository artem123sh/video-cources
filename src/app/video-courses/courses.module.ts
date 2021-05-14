import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { VideoCoursesComponent } from './components/video-courses.component';
import { VideoCoursesListItemComponent } from './components/video-courses-list-item/video-courses-list-item.component';
import { VideoCoursesSearchComponent } from './components/video-courses-search/video-courses-search.component';
import { VideoCoursesLoadMoreComponent } from './components/video-courses-load-more/video-courses-load-more.component';
import { HourMinutesDuration } from './components/video-courses-list-item/hh-mm-duration.pipe';
import { HighlightBordersDirective } from './components/video-courses-list-item/highlight-borders.directive';
import { VideoCoursesNoDataComponent } from './components/video-courses-no-data/video-courses-no-data.component';
import { FilterPipe } from './components/filter.pipe';
import { SortPipe } from './components/sort.pipe';
import { VideoCoursesFormComponent } from './components/video-courses-form/video-courses-form.component';
import { VideoCoursesAddNewComponent } from './components/video-courses-add-new/video-courses-add-new.component';

@NgModule({
  declarations: [
    VideoCoursesComponent,
    VideoCoursesSearchComponent,
    VideoCoursesListItemComponent,
    VideoCoursesLoadMoreComponent,
    HourMinutesDuration,
    HighlightBordersDirective,
    VideoCoursesNoDataComponent,
    SortPipe,
    FilterPipe,
    VideoCoursesFormComponent,
    VideoCoursesAddNewComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [VideoCoursesComponent],
  providers: [FilterPipe],
})
export class VideoCoursesModule {}
