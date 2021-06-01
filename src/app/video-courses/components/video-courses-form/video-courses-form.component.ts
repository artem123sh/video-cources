import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vc-video-courses-form',
  templateUrl: './video-courses-form.component.html',
  styleUrls: ['./video-courses-form.component.scss'],
})
export class VideoCoursesFormComponent {
  @Input()
  public title: string;

  @Input()
  public description: string;

  @Input()
  public duration: string;

  @Input()
  public date: Date;

  @Input()
  public authors: string;

  @Output()
  public handleSave = new EventEmitter();

  public save() {
    const local = new Date(this.date);
    local.setMinutes(this.date.getMinutes() - this.date.getTimezoneOffset());
    const course = {
      title: this.title,
      createdDate: local.toISOString().slice(0, 10),
      duration: this.duration,
      description: this.description,
      isTopRated: false,
    };
    this.handleSave.emit(course);
  }
}
