import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'returnName'
})
export class ReturnNamePipe implements PipeTransform {

  transform(usuario: any): string {
    let nombre_completo=usuario.nombre+' '+usuario.apellido_paterno;
    return nombre_completo;
  }

}
