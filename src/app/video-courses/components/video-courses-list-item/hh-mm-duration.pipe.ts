import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class HourMinutesDuration implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(minutes: number): string {
    const hours: number = Math.floor(minutes / 60);
    return `${hours}h ${minutes - hours * 60}min`;
  }
}
