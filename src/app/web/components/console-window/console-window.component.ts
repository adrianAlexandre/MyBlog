import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-window',
  templateUrl: './console-window.component.html',
  styleUrls: ['./console-window.component.scss']
})
export class ConsoleWindowComponent implements OnInit {
  @Input() isHeader: boolean = false;
  @Input() code: string = "";
  @Input() consoleId: string = "";
  @Input() cursorPosition: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
