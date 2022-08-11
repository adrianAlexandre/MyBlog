import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { BUTTON_COLOR } from '../../components/button/button.component';
import { StarListColumn } from '../../models/StarListColumn';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  header: string="";
  iconsPath="/assets/images/icons/"
  public BUTTON_COLOR=BUTTON_COLOR;
  public starListContent:StarListColumn[]=[{title:"Frontend",titleColor:"rgba(101, 251, 152, 1)",items:[{  description:"Angular",icon:this.iconsPath+"angular.svg"},{  description:"HTML",icon:this.iconsPath+"html-5.svg"},{  description:"CSS",icon:this.iconsPath+"css3.svg"},{  description:"Typescript",icon:this.iconsPath+"typescript.svg"}]},{title:"title",titleColor:"",items:[{  description:"string",icon:"/assets/images/icons/logos_angular-icon.svg"},{  description:"string",icon:"/assets/images/icons/logos_angular-icon.svg"}]}]

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
