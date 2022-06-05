import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyBlog';
  header = '';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.translate.get('about-me.header').subscribe((text: string) => {
      AppComponent.prototype.setHeader(text);
      this.setHeader(text);
    });
  }
  onInit() {

  }
  setHeader(header: string) {
    this.header = header;
  }

}
