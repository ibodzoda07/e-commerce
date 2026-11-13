import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const [length] = args as [number];
    if (!value) return '';
    return value.length > length ? value.substring(0, length) + '...' : value;
  }
}
