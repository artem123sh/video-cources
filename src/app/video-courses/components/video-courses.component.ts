import { Component, OnInit } from '@angular/core';
import { VideoCoursesService } from '../services/video-courses.service';
import { Course } from '../shared/models/course.model';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'vc-video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.scss'],
})
export class VideoCoursesComponent implements OnInit {
  private allCourses: Course[];

  public courses: Course[];

  public isAddNewCourse = false;

  constructor(private filterPipe: FilterPipe, private videoCoursesService: VideoCoursesService) {}

  ngOnInit(): void {
    this.getVideoCourses();
  }

  // eslint-disable-next-line class-methods-use-this
  identify(index: number, course: Course) {
    return course.id;
  }

  public toggleNewCourse() {
    this.isAddNewCourse = !this.isAddNewCourse;
  }

  public addCourse(course: Omit<Course, 'id'>) {
    this.videoCoursesService.createItem(course);
    this.toggleNewCourse();
    this.getVideoCourses();
  }

  public deleteCourse(courseId: string) {
    if (window.confirm('Do you really want to delete this course?')) {
      this.videoCoursesService.removeCourse(courseId);
      this.getVideoCourses();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public editCourse(courseId: string) {
    console.log(`Edit ${courseId}`);
  }

  public search(searchCriteria: string) {
    this.courses = this.filterPipe.transform(this.allCourses, searchCriteria);
  }

  private getVideoCourses() {
    this.allCourses = this.videoCoursesService.getCourses();
    this.courses = [...this.allCourses];
  }
}
