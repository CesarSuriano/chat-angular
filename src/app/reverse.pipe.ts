import {Pipe} from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe {
  transform (v) {
    if (v) return v.reverse();

  }
}