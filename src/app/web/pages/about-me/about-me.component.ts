import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BUTTON_COLOR } from '../../components/button/button.component';
import { StarListColumn } from '../../models/StarListColumn';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  header: string="";
  iconsPath="./assets/images/icons/"
  public BUTTON_COLOR=BUTTON_COLOR;
  public skillsList:StarListColumn[]=[{title:"Frontend",titleColor:"rgba(101, 251, 152, 1)",
  items:[{  description:"Angular",icon:this.iconsPath+"angular.svg"},
  {  description:"HTML",icon:this.iconsPath+"html-5.svg"},
  {  description:"CSS",icon:this.iconsPath+"css3.svg"},
  {  description:"Typescript",icon:this.iconsPath+"typescript.svg"}]},
  {title:"Backend",titleColor:"rgba(239, 101, 251, 1)",items:[{  description:"Java",icon:this.iconsPath+"java.svg"},
  {  description:"Node JS",icon:this.iconsPath+"node-js.svg"}]},
  {title:"Other Skills",titleColor:"rgba(251, 227, 101, 1)",
  items:[{  description:"Figma",icon:this.iconsPath+"figma.svg"},
  {  description:"Git",icon:this.iconsPath+"git.svg"},
  ]}]

  public toDoList:StarListColumn[]=[{title:"",titleColor:"rgba(101, 251, 152, 1)",
  items:[{  description:"Angular",icon:this.iconsPath+"angular.svg"},
  {  description:"HTML",icon:this.iconsPath+"html-5.svg"},
  {  description:"CSS",icon:this.iconsPath+"css3.svg"},
  {  description:"Typescript",icon:this.iconsPath+"typescript.svg"}]},
  ]

  public workExperience:StarListColumn[]=[{title:"",titleColor:"rgba(101, 251, 152, 1)",
  items:[{  description:"Fullstack Developer",icon:this.iconsPath+"NTT-Data-Logo.svg"}]}
  ]

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
  scrollToForm(){
    const element = document.querySelector("#contact-form")
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

}
