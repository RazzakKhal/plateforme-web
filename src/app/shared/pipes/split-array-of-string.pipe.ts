import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitArrayOfString',
  pure : true
})
export class SplitArrayOfStringPipe implements PipeTransform {

  transform(value: string, separator : string = ','): string[] {
    return value.split(separator);
  }

}
