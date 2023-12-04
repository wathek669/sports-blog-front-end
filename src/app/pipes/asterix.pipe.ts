import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[aeuioy]/g,"*");
  }

}
