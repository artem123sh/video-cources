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
import { VideoCoursesListComponent } from './components/video-courses-list/video-courses-list.component';
import { VideoCoursesListItemComponent } from './components/video-courses-list-item/video-courses-list-item.component';
import { VideoCoursesSearchComponent } from './components/video-courses-search/video-courses-search.component';
import { VideoCoursesLoadMoreComponent } from './components/video-courses-load-more/video-courses-load-more.component';
import { HourMinutesDuration } from './components/video-courses-list-item/hh-mm-duration.pipe';
import { DateObjectPipe } from './components/video-courses-edit/date-object.pipe';
import { AuthorsPipe } from './components/video-courses-edit/authors.pipe';
import { HighlightBordersDirective } from './components/video-courses-list-item/highlight-borders.directive';
import { VideoCoursesNoDataComponent } from './components/video-courses-no-data/video-courses-no-data.component';
import { FilterPipe } from './components/filter.pipe';
import { SortPipe } from './components/sort.pipe';
import { VideoCoursesFormComponent } from './components/video-courses-form/video-courses-form.component';
import { VideoCoursesAddNewComponent } from './components/video-courses-add-new/video-courses-add-new.component';
import { VideoCoursesRoutingModule } from './courses-routing.module';
import { VideoCoursesEditComponent } from './components/video-courses-edit/video-courses-edit.component';

@NgModule({
  declarations: [
    VideoCoursesSearchComponent,
    VideoCoursesListComponent,
    VideoCoursesListItemComponent,
    VideoCoursesLoadMoreComponent,
    HourMinutesDuration,
    HighlightBordersDirective,
    VideoCoursesNoDataComponent,
    SortPipe,
    FilterPipe,
    DateObjectPipe,
    AuthorsPipe,
    VideoCoursesFormComponent,
    VideoCoursesAddNewComponent,
    VideoCoursesEditComponent,
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
    VideoCoursesRoutingModule,
  ],
  exports: [VideoCoursesListComponent],
  providers: [FilterPipe],
})
export class VideoCoursesModule {}
