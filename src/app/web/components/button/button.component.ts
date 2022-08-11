import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum BUTTON_WIDTH {
  SMALL,
  MEDIUM,
  LARGE
}
export enum BUTTON_COLOR {
  PRIMARY,
  RED,
  GREEN,
  YELLOW,
  SECONDARY_BLUE,
  PURPLE
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = "button";
  @Input() active: boolean = false;
  @Input() width: BUTTON_WIDTH = BUTTON_WIDTH.SMALL;
  @Input() color: BUTTON_COLOR = BUTTON_COLOR.RED;
  @Output() onClickEmitter = new EventEmitter<string>();

  class:string="";

  constructor() {
    this.setClass();
   }

  ngOnInit(): void {
    this.setClass();

  }

  onClick(){
    this.onClickEmitter.emit();
  }
  setClass(){
    this.class="";
    switch (this.color) {
      case BUTTON_COLOR.GREEN:
          this.class+= "green_btn ";
        break;
      case BUTTON_COLOR.PRIMARY:
        this.class+= "primary_btn ";
        break;
      case BUTTON_COLOR.PURPLE:
        this.class+= "purple_btn ";
        break;
      case BUTTON_COLOR.RED:
        this.class+= "red_btn ";
        break;
      case BUTTON_COLOR.SECONDARY_BLUE:
        this.class+= "blue_btn ";
        break;
      case BUTTON_COLOR.PURPLE:
        this.class+= "purple_btn ";
        break;
      default:
        this.class+= "primary_btn ";
        break;
    }
    switch (this.width) {
      case BUTTON_WIDTH.SMALL:
        this.class+= "small_btn ";
        break;
    }
  }

}
