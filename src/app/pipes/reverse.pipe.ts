import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let newValue = value.reverse().filter( val => val.includes(args[0]));
    if (args[1]) {
      newValue = newValue.reverse();
    }
    return newValue;
  }

}
