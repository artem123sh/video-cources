import { Component, OnInit } from '@angular/core';
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

  constructor(private filterPipe: FilterPipe) {}

  ngOnInit(): void {
    // TODO: replace with a service
    this.allCourses = [
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
      },
    ];
    this.courses = this.allCourses;
  }

  // eslint-disable-next-line class-methods-use-this
  identify(index: number, couse: Course) {
    return couse.id;
  }

  public deleteCourse(courseId: string) {
    this.courses = this.courses.filter(({ id }) => id !== courseId);
  }

  // eslint-disable-next-line class-methods-use-this
  public editCourse(courseId: string) {
    console.log(`Edit ${courseId}`);
  }

  // eslint-disable-next-line class-methods-use-this
  public search(searchCriteria: string) {
    this.courses = this.filterPipe.transform(this.allCourses, searchCriteria);
  }
}
