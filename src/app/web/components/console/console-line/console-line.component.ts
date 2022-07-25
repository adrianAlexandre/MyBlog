import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-line',
  templateUrl: './console-line.component.html',
  styleUrls: ['./console-line.component.scss']
})
export class ConsoleLineComponent implements OnInit {
  @Input() lineContent: string = "";
  @Input() lineNumber: number = 0;
  @Input() cursorPosition: number = -1;
  @Input() isHeader: boolean = false;

  constructor() {
    this.printCursor();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.printCursor();
  }
  printCursor() {
    if (this.cursorPosition > -1) {
      let codeLine = document.getElementById(this.lineNumber.toString());
      if (codeLine) {
        let cursor = document.createElement("div");
        cursor.classList.add("cursor");
        codeLine.appendChild(cursor);
      }
    }
  }

}
