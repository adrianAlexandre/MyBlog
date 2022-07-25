import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  header: string="";

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit(): void {

    this.translate.get('about-me.header').subscribe((text: string) => {
      this.header=text;
    });
  }
  setHeader(header: string) {
    this.header = header;
  }

}
