import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): String {
    let duration: String = `${formatNumber(value % 60, 'en-US', '2.0-0')}`;
    if (value / 60 < 1) return `${duration} sec`;
    duration = `${formatNumber(Math.floor(value / 60) % 60, 'en-US', '2.0-0')}:${duration}`;
    if (value / 3600 < 1) return `${duration} min`;
    duration = `${Math.floor(value / 3600) % 60}:${duration}`;
    return `${duration} h`;
  }
}
