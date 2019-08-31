import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[app-number] [ngModel]'
})
export class NumberDirective {
  constructor(private element: ElementRef, private ngModel: NgControl) { }

  @HostListener('input')
  onInputClean() {
    console.log(this.element.nativeElement.value);
    const inputReplaceValue = this.element.nativeElement.value.replace(/\D/g, '');
    this.ngModel.control.setValue(inputReplaceValue);
  }
}
