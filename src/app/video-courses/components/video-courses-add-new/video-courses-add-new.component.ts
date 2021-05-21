import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoCoursesService } from '../../services/video-courses.service';

import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-add-new',
  templateUrl: './video-courses-add-new.component.html',
  styleUrls: ['./video-courses-add-new.component.scss'],
})
export class VideoCoursesAddNewComponent {
  constructor(private videoCoursesService: VideoCoursesService, private router: Router) {}

  public addCourse(course: Omit<Course, 'id'>) {
    this.videoCoursesService.createItem(course);
  }

  public handleSave(course: Course) {
    this.videoCoursesService.createItem(course);
    this.router.navigate(['..']);
  }
}
