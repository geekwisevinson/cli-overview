import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {Test} from '../enums/test.enum';

@Directive({
  selector: '[geekwiseAlerter]'
})
export class AlerterDirective {
  @HostListener('click') onClick() {
    alert(this.geekwiseAlerter);
    this.alert = false;
  }

  @HostBinding('class.alert') alert = true;
  @Input() public geekwiseAlerter;
  constructor(private el: ElementRef) {
    setInterval( () => this.blink(), 1000);
  }

  public blink() {
    if (this.el.nativeElement.style.color === 'transparent') {
      this.el.nativeElement.style.color = this.geekwiseAlerter;
    } else {
      this.el.nativeElement.style.color = 'transparent';
    }

  }


}
