import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[vcHighlightBorders]',
})
export class HighlightBordersDirective implements OnInit {
  @Input('vcHighlightBorders') public created: string;

  constructor(private element: ElementRef) {}

  getBgColor() {
    const createdDate = new Date(this.created);
    const currentDate = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(currentDate.getDate() - 14);
    switch (true) {
      case createdDate < currentDate && createdDate >= twoWeeksAgo:
        return 'green';
      case createdDate > currentDate:
        return 'blue';
      default:
        return undefined;
    }
  }

  ngOnInit(): void {
    const bgColor = this.getBgColor();
    if (bgColor) {
      this.element.nativeElement.style.border = `1px solid ${bgColor}`;
    }
  }
}
