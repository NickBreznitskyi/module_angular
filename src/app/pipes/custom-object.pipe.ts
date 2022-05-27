import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customObject'
})
export class CustomObjectPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(new RegExp('[\{,]', 'gm'), '\n').replace(new RegExp('\}', 'gm'), '');
  }

}
