import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsDescription'
})
export class NewsDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length > 0) {
      if (value.split('<a').length > 1) {
        value = value.split('<a')[0] +  value.split('<a')[1].split('</a>')[1]
      }
      value = value.replace('<ol>', '').replace('</ol>', '').replace('<li>', '').replace('</li>', '').replace('<ul>', '').replace('</ul>', '')
      value = value.slice(0, 150) + ' ...'
      return value
    } else {
      return value
    }
  }

}
