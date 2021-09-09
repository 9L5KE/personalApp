import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCase'
})
export class LowercasePipe implements PipeTransform {

  transform(texto: any): unknown {
    if(texto)
    {
      return texto.toLowerCase();
    }
    else
    {
      return texto;
    }
  }

}
