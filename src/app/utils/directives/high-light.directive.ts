import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  //@Input() colorBase: string;
  //@Input('appResaltar') resaltarColor:string
  @HostListener('mouseenter') onMouseEnter()
  {
      this.resaltar('red');
  }
  @HostListener('mouseleave') onMouseLeave()
  {
    this.resaltar(null);
  }
  resaltar(color:any): void
  {
    this.el.nativeElement.style.backgroundColor=color
  }
  constructor(private el: ElementRef) { 

  }

}
