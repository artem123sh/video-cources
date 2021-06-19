import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VideoCoursesService } from '../../services/video-courses.service';

import { Author, Course } from '../../shared/models/course.model';
import { addCourse } from '../../state/courses.actions';

@Component({
  selector: 'vc-video-courses-add-new',
  templateUrl: './video-courses-add-new.component.html',
  styleUrls: ['./video-courses-add-new.component.scss'],
})
export class VideoCoursesAddNewComponent implements OnInit {
  constructor(private store: Store, private videoCoursesService: VideoCoursesService) {}

  public authors: Observable<Author[] | null>;

  ngOnInit(): void {
    this.authors = this.videoCoursesService.getAuthors();
  }

  public handleSave(course: Omit<Course, 'id'>) {
    this.store.dispatch(addCourse({ course }));
  }
}
