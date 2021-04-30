import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../shared/models/course.model';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(courses: Course[], sortBy: keyof Course): Course[] {
    if (!sortBy) {
      return courses;
    }

    return courses.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });
  }
}
