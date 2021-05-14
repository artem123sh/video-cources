import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-video-courses-form',
  templateUrl: './video-courses-form.component.html',
  styleUrls: ['./video-courses-form.component.scss'],
})
export class VideoCoursesFormComponent {
  public title: string;

  public description: string;

  public duration: string;

  public date: Date;

  public authors: string;

  @Output()
  public handleClose = new EventEmitter();

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

  public cancel() {
    this.handleClose.emit();
  }
}
