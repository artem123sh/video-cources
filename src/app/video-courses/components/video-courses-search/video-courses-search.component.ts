import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-video-courses-search',
  templateUrl: './video-courses-search.component.html',
  styleUrls: ['./video-courses-search.component.scss'],
})
export class VideoCoursesSearchComponent {
  public searchValue: string;

  @Output()
  public searchCourse = new EventEmitter();

  @Output()
  public addCourse = new EventEmitter();

  public handleSearch() {
    this.searchCourse.emit(this.searchValue);
  }

  public handleAddCourse() {
    this.addCourse.emit();
  }
}
