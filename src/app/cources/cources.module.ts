import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCourcesComponent } from './components/video-cources.component';
import { VideoCourcesListComponent } from './components/video-cources-list/video-cources-list.component';
import { VideoCourcesListItemComponent } from './components/video-cources-list-item/video-cources-list-item.component';
import { VideoCourcesSearchComponent } from './components/video-cources-search/video-cources-search.component';

@NgModule({
  declarations: [
    VideoCourcesComponent,
    VideoCourcesSearchComponent,
    VideoCourcesListComponent,
    VideoCourcesListComponent,
    VideoCourcesListItemComponent,
  ],
  imports: [CommonModule],
  exports: [VideoCourcesComponent],
})
export class CourcesModule {}
