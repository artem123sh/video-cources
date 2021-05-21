import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoCoursesService } from '../../services/video-courses.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'vc-video-courses-edit',
  templateUrl: './video-courses-edit.component.html',
  styleUrls: ['./video-courses-edit.component.scss'],
})
export class VideoCoursesEditComponent implements OnInit, OnDestroy {
  constructor(
    private videoCoursesService: VideoCoursesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public course: Course;

  private id: string;

  private sub: Subscription;

  ngOnInit(): void {
    this.sub = this.activeRoute.params.subscribe((params) => {
      const course = this.videoCoursesService.getCourseById(params.id);
      if (course) {
        this.id = params.id;
        this.course = course;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public handleSave(course: Course): void {
    this.videoCoursesService.updateCourse({ ...course, id: this.id });
    this.router.navigate(['..']);
  }
}
