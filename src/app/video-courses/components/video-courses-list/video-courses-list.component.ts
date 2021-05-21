import { Component, OnInit } from '@angular/core';
import { VideoCoursesService } from '../../services/video-courses.service';
import { Course } from '../../shared/models/course.model';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'vc-video-courses-list',
  templateUrl: './video-courses-list.component.html',
  styleUrls: ['./video-courses-list.component.scss'],
})
export class VideoCoursesListComponent implements OnInit {
  private allCourses: Course[];

  public courses: Course[];

  constructor(private filterPipe: FilterPipe, private videoCoursesService: VideoCoursesService) {}

  ngOnInit(): void {
    this.getVideoCourses();
  }

  // eslint-disable-next-line class-methods-use-this
  identify(index: number, course: Course) {
    return course.id;
  }

  public deleteCourse(courseId: string) {
    if (window.confirm('Do you really want to delete this course?')) {
      this.videoCoursesService.removeCourse(courseId);
      this.getVideoCourses();
    }
  }

  public search(searchCriteria: string) {
    this.courses = this.filterPipe.transform(this.allCourses, searchCriteria);
  }

  private getVideoCourses() {
    this.allCourses = this.videoCoursesService.getCourses();
    this.courses = [...this.allCourses];
  }
}
