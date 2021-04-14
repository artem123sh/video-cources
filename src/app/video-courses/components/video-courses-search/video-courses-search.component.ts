import { Component } from '@angular/core';

@Component({
  selector: 'vc-video-courses-search',
  templateUrl: './video-courses-search.component.html',
  styleUrls: ['./video-courses-search.component.scss'],
})
export class VideoCoursesSearchComponent {
  public searchInput: string;

  public handleSearch() {
    console.log(this.searchInput);
  }
}
