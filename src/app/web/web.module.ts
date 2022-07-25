import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PresentationContainerComponent } from './pages/about-me/presentation-container/presentation-container.component';
import { ConsoleComponent } from './components/console/console.component';
import { ConsoleLineComponent } from './components/console/console-line/console-line.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutMeComponent,
    PresentationContainerComponent,
    ConsoleComponent,
    ConsoleLineComponent,

  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    AboutMeComponent,
    PresentationContainerComponent,
    ConsoleComponent,
    ConsoleLineComponent,  ]
})
export class WebModule { }
