import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../../shared/models/course.model';

@Pipe({ name: 'authors' })
export class AuthorsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(authors: Author[] | undefined): string {
    return authors ? authors.map(({ name }) => `${name}`).join(', ') : '';
  }
}
