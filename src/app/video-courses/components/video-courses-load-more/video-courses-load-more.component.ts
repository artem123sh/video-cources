import { Component } from '@angular/core';

@Component({
  selector: 'vc-video-courses-load-more',
  templateUrl: './video-courses-load-more.component.html',
  styleUrls: ['./video-courses-load-more.component.scss'],
})
export class VideoCoursesLoadMoreComponent {
  // eslint-disable-next-line class-methods-use-this
  public handleLoadMoreClick() {
    console.log('Load More clicked');
  }
}
