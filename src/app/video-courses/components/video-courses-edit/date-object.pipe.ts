import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateObject' })
export class DateObjectPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(date: string | undefined): Date {
    return date ? new Date(date) : new Date();
  }
}