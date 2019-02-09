import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-ui-button',
  template: `
    <button (click)="btnClickHandler($event)">{{ title }}</button>
  `,
  styles: []
})
export class UiButtonComponent implements OnInit {

  @Input() title: String = '';
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClickHandler($e) {
    this.btnClick.emit($e);
  }

}
