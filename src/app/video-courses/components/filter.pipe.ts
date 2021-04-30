import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../shared/models/course.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(courses: Course[], query: string): Course[] {
    if (!query) {
      return courses;
    }

    const regex = new RegExp(query, 'i');

    return courses.filter((course) => regex.test(course.title) || regex.test(course.description));
  }
}
