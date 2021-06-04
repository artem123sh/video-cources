import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-video-courses-search',
  templateUrl: './video-courses-search.component.html',
  styleUrls: ['./video-courses-search.component.scss'],
})
export class VideoCoursesSearchComponent {
  @Output()
  public searchCourse = new EventEmitter();

  @Output()
  public addCourse = new EventEmitter();

  public handleSearchChange(event: Event) {
    this.searchCourse.emit((<HTMLInputElement>event.target).value);
  }

  public handleAddCourse() {
    this.addCourse.emit();
  }
}
