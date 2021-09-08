import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  host:{
    style: 'display:none'
  }
})
export class HighLightDirective {

  constructor() { }

}
