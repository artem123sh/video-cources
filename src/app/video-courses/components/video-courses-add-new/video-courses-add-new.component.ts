import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoCoursesService } from '../../services/video-courses.service';

import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-add-new',
  templateUrl: './video-courses-add-new.component.html',
  styleUrls: ['./video-courses-add-new.component.scss'],
})
export class VideoCoursesAddNewComponent implements OnDestroy {
  constructor(private videoCoursesService: VideoCoursesService, private router: Router) {}

  private sub: Subscription;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public addCourse(course: Omit<Course, 'id'>) {
    this.videoCoursesService.createItem(course);
  }

  public handleSave(course: Course) {
    this.sub = this.videoCoursesService.createItem(course).subscribe(() => {
      this.router.navigate(['..']);
    });
  }
}
