import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author, Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-form',
  templateUrl: './video-courses-form.component.html',
  styleUrls: ['./video-courses-form.component.scss'],
})
export class VideoCoursesFormComponent implements OnInit, OnChanges {
  constructor(private fb: FormBuilder) {}

  @Input()
  public course: Course | null;

  @Input()
  public authors: Author[] | null;

  @Output()
  public handleSave = new EventEmitter();

  public courseForm: FormGroup;

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: [new Date()],
      duration: [0],
      authors: [[]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const course = changes?.course?.currentValue as Course;
    if (this.courseForm?.controls && course) {
      this.courseForm.controls.title.setValue(course.title);
      this.courseForm.controls.description.setValue(course.description);
      this.courseForm.controls.duration.setValue(course.duration);
      this.courseForm.controls.date.setValue(course.createdDate);
      this.courseForm.controls.authors.setValue(course.authors);
    }
  }

  get formControls() {
    return this.courseForm.controls;
  }

  public save() {
    if (this.courseForm.valid) {
      const {
        authors: { authors },
        duration: { duration },
        date: { date },
        ...rest
      } = this.courseForm.value;
      this.handleSave.emit({ ...rest, authors, duration, date });
    }
  }
}
