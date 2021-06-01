import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Course } from '../shared/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class VideoCoursesService {
  private courses: Course[];

  constructor() {
    this.courses = [
      {
        id: '7b7f54eb-d47e-4acc-8e43-5480fb9224ce',
        title: 'Video Course 1',
        createdDate: '2020-05-20',
        duration: 305,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ' +
          'tristique elementum neque, sit amet tincidunt elit elementum a. Nam sed cursus velit. ' +
          'Quisque ipsum nibh, malesuada ac blandit eget, pulvinar id urna. Suspendisse volutpat tellus' +
          'tristique velit hendrerit vulputate. Nam vestibulum tempus leo nec vestibulum. Vivamus varius ac ' +
          'ibero ac interdum. Sed magna nunc, rutrum vitae congue iaculis, condimentum ut mi.',
        isTopRated: false,
        authors: '',
      },
      {
        id: 'f204a102-e1dd-4433-8daa-ade536eef15e',
        title: 'Video Course 2',
        createdDate: '2021-10-15',
        duration: 107,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ' +
          'tristique elementum neque, sit amet tincidunt elit elementum a. Nam sed cursus velit. ' +
          'Quisque ipsum nibh, malesuada ac blandit eget, pulvinar id urna. Suspendisse volutpat tellus' +
          'tristique velit hendrerit vulputate. Nam vestibulum tempus leo nec vestibulum. Vivamus varius ac ' +
          'ibero ac interdum. Sed magna nunc, rutrum vitae congue iaculis, condimentum ut mi.',
        isTopRated: true,
        authors: '',
      },
      {
        id: '7a32b000-df88-4518-92c7-6bd42e557323',
        title: 'Video Course 3',
        createdDate: '2021-04-26',
        duration: 79,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ' +
          'tristique elementum neque, sit amet tincidunt elit elementum a. Nam sed cursus velit. ' +
          'Quisque ipsum nibh, malesuada ac blandit eget, pulvinar id urna. Suspendisse volutpat tellus' +
          'tristique velit hendrerit vulputate. Nam vestibulum tempus leo nec vestibulum. Vivamus varius ac ' +
          'ibero ac interdum. Sed magna nunc, rutrum vitae congue iaculis, condimentum ut mi.',
        isTopRated: false,
        authors: '',
      },
    ];
  }

  public getCourses(): Array<Course> {
    return this.courses;
  }

  public createItem(course: Omit<Course, 'id'>) {
    this.courses = [...this.courses, { ...course, id: uuidv4() }];
  }

  public getCourseById(courseId: string): Course | null {
    return this.courses.find(({ id }) => id === courseId) || null;
  }

  public updateCourse(course: Course): void {
    const index = this.courses.findIndex(({ id }) => id === course.id);
    if (index !== -1) {
      this.courses = [...this.courses.slice(0, index), course, ...this.courses.slice(index + 1)];
    }
  }

  public removeCourse(courseId: string): void {
    this.courses = this.courses.filter(({ id }) => id !== courseId);
  }
}
