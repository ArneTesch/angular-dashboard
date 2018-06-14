import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class='{{ buttonClassList }}'
      (click)='clicked.emit({type: buttonAction})'
      type='{{ buttonType }}'>
      <i class='{{buttonIconLeft}} left' *ngIf='buttonIconLeft'></i>
      {{buttonContent | translate}}
      <i class='{{buttonIconRight}} right' *ngIf='buttonIconRight'></i>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() buttonContent: string;
  @Input() buttonClassList: string;
  @Input() buttonIconLeft: string;
  @Input() buttonIconRight: string;
  @Input() buttonAction: string;
  @Input() buttonType: string;

  @Output() clicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }
}
