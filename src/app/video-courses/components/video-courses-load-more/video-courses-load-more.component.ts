import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-video-courses-load-more',
  templateUrl: './video-courses-load-more.component.html',
  styleUrls: ['./video-courses-load-more.component.scss'],
})
export class VideoCoursesLoadMoreComponent {
  @Output()
  public loadMore = new EventEmitter();

  public handleLoadMoreClick() {
    this.loadMore.emit();
  }
}
