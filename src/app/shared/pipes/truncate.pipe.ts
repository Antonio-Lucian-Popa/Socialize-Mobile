import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value || value.length <= limit) return value;

    let truncated = '';
    const words = value.split(' ');

    for (const word of words) {
      if ((truncated.length + word.length) <= limit) {
        truncated += word + ' ';
      } else {
        truncated = truncated.trim() + '...';
        break;
      }
    }

    return truncated;
  }

}
