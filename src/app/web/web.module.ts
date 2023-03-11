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
import { ButtonComponent } from './components/button/button.component';
import { StarListComponent } from './components/star-list/star-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConsoleWindowComponent } from './components/console-window/console-window.component';
import { WorkListComponent } from './components/work-list/work-list.component';
import { DynamicContainerComponent } from './components/dynamic-container/dynamic-container.component';
import { WaveSeparatorComponent } from './components/wave-separator/wave-separator.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutMeComponent,
    PresentationContainerComponent,
    ConsoleComponent,
    ConsoleLineComponent,
    ButtonComponent,
    StarListComponent,
    FooterComponent,
    ConsoleWindowComponent,
    WorkListComponent,
    DynamicContainerComponent,
    WaveSeparatorComponent,

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
    ConsoleWindowComponent,
    ConsoleComponent,
    ConsoleLineComponent,
    FooterComponent
    ]
})
export class WebModule { }
