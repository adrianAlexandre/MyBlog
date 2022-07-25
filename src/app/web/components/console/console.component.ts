import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit, AfterViewInit {
  @Input() isHeader: boolean = false;
  @Input() code: string = "";
  @Input() consoleId: string = "";
  @Input() cursorPosition: number[] = [];
  consoleContent: [{ content: string, cursorPosition: number }] = [{ content: "", cursorPosition: -1 }];

  constructor(private cdRef:ChangeDetectorRef) {
    //this.printCode();
  }
  ngOnInit(): void {
    this.printCode();
  }
  ngAfterViewInit(): void {
    //this.printCode();
  }
  ngOnChange() {
    //this.printCode();
  }
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

  printCode() {
    this.consoleContent = [{ content: "", cursorPosition: -1 }];
    this.consoleContent.pop();
    let i = 0;
    let cursorPosition = -1;
    this.code.split("\n").forEach(line => {
      if (i == this.cursorPosition[0]) {
        cursorPosition = this.cursorPosition[0];
      } else {
        cursorPosition = -1;
      }
      let content = { content: line, cursorPosition: cursorPosition };
      this.consoleContent.push(content);
      i++;
    });
  }
}


