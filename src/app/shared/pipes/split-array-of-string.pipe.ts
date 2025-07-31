import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitArrayOfString',
  pure : true
})
export class SplitArrayOfStringPipe implements PipeTransform {

  transform(value: string | undefined, separator : string = ','): string[] |undefined {
    return value ? value.split(separator): undefined;
  }

}
