import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

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
    console.log(this.geekwiseAlerter);
    if (this.el.nativeElement.style.color === 'transparent') {
      this.el.nativeElement.style.color = this.geekwiseAlerter;
    } else {
      this.el.nativeElement.style.color = 'transparent';
    }

  }


}
