import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

    transform(value: number[], order: 'asc' | 'desc' = 'asc'): number[] {
    if (!value || !Array.isArray(value)) return [];

    return value.sort((a, b) => {
      return order === 'asc' ? a - b : b - a;
    });
  }

}
