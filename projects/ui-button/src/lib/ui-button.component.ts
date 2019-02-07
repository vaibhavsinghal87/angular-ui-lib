import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'btn-ui-button',
  template: `
    <button (click)="btnClickHandler($event)">{{ title }}</button>
  `,
  styles: []
})
export class UiButtonComponent implements OnInit {

  @Input() title: String = '';
  @Output() btnClick: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClickHandler($e) {
    this.btnClick.emit($e);
  }

}
