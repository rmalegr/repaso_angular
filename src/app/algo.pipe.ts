import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'algo'
})
export class AlgoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('inside algo pipe')
    return  'transformed-data';
  }

}
