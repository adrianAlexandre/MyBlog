import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { ConsoleLineComponent } from './console-line/console-line.component';



@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleLineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConsoleComponent,
    ConsoleLineComponent
  ],

})
export class ConsoleModule { }
