import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pace'
})
export class PacePipe implements PipeTransform {

  transform(value: number): String {
    return `${Math.floor(value)}:${formatNumber(Math.round(value % 1 * 60), 'en-US', '2.0-0')} min/km`;
  }
}
