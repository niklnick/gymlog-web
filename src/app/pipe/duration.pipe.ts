import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): String {
    return `${Math.floor(value / 60)}:${formatNumber(value % 60, 'en-US', '2.0-0')} min`;
  }
}
