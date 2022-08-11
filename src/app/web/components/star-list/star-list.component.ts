import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';
import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { StarListColumn } from '../../models/StarListColumn';
@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.scss'],
  animations:[
  trigger('line',[
    transition(':enter', [
      style({ height: 0 }),
      animate('500ms ease-out', style({ height: "7em"}))
    ])
  ]),
  // trigger('icon',[
  //   transition(':enter', [
  //     style({ opacity: 0 }),
  //     animate('100ms ease-out', style({ opacity: 1}))
  //   ])
  // ]),
  // trigger('inner-circle',[
  //   transition(':enter', [
  //     style({ opacity: 0 }),
  //     animate('1000ms ease-out', style({ opacity: 1}))
  //   ])
  // ]),
  // trigger('outside-circle',[
  //   transition(':enter', [
  //     style({ opacity: 0 }),
  //     animate('1000ms ease-out', style({ opacity: 1}))
  //   ])
  // ]),
  // trigger('innerCircle',[
  //   transition(':enter', [
  //     style({width: '0px',height: '0px' }),
  //     animate('600ms ease-out', style({width: '6px',height: '6px' }))
  //   ])
  // ]),
  // trigger('outsideCircle',[
  //   transition(':enter', [
  //     style({width: '0px',height: '0px'}),
  //     animate('500ms ease-out', style({width: '14px',height: '14px'}))
  //   ])
  // ]),
  trigger('pageAnimations',[

    transition(':enter', [
      query('.outside-circle', [
        style({width: '0px',height: '0px'}),
        stagger(20, [
          animate('800ms',
          style({width: '14px',height: '14px'}))
        ])
      ]),
      query('.inner-circle', [
        style({width: '0px',height: '0px'}),
        stagger(10, [
          animate('500ms',
          style({width: '6px',height: '6px' }))
        ])
      ])
    ]),
    transition(':leave', [
      query('.outside-circle', [
        style({width: '14px',height: '14px'}),
        stagger(10, [
          animate('800ms',
          style({width: '0px',height: '0px'}))
        ])
      ]),
      query('.inner-circle', [
        style({width: '6px',height: '6px'}),
        stagger(20, [
          animate('500ms',
          style({width: '0px',height: '0px' }))
        ])
      ])
    ])
  ])
]})

export class StarListComponent implements OnInit,AfterContentInit {

  @Input() columns: StarListColumn[] = [];
  columnsShown: StarListColumn[] = [];

  constructor() { }

  ngOnInit(): void {
    var promise = Promise.resolve();
    var interval = 1000;
    this.columnsShown=[];
    for (const element of this.columns) {
      this.columnsShown.push({"title":element.title,"titleColor":element.titleColor,"items":[]});
      element.items.forEach(async item => {
        promise = promise.then(() => {
          this.columnsShown[this.columns.indexOf(element)].items.push(item);

          return new Promise(function (resolve) {
            setTimeout(resolve, interval);
          });

        });
        // promise = promise.then(function () {
        //   console.log(JSON.stringify(element));

        //   return new Promise(function (resolve) {
        //     setTimeout(resolve, interval);
        //   });
        // });

        //this.columnsShown[this.columnsShown.length-1].items.push(item);
        console.log("test");


      });
    }

  }
  ngAfterContentInit():void {


  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  initColumns(){

  }
  async test(){
    var promise = Promise.resolve();
    var interval = 1000;
    this.columnsShown=[];
    for (const element of this.columns) {
      this.columnsShown.push({"title":element.title,"titleColor":element.titleColor,"items":[]});
      element.items.forEach(async item => {
        promise = promise.then(() => {
          this.columnsShown[this.columns.indexOf(element)].items.push(item);

          return new Promise(function (resolve) {
            setTimeout(resolve, interval);
          });

        });
        // promise = promise.then(function () {
        //   console.log(JSON.stringify(element));

        //   return new Promise(function (resolve) {
        //     setTimeout(resolve, interval);
        //   });
        // });

        //this.columnsShown[this.columnsShown.length-1].items.push(item);
        console.log("test");


      });
    }

    // this.columns.forEach(element => {
    //   cont++


    //   this.columnsShown.push({"title":element.title,"titleColor":element.titleColor,"items":[]});
    //   alert("");
    //   element.items.forEach(async item => {
    //     promise = promise.then(() => {
    //       console.log(element);
    //       this.columnsShown[cont].items.push(item);

    //       return new Promise(function (resolve) {
    //         setTimeout(resolve, interval);
    //       });

    //     });
    //     // promise = promise.then(function () {
    //     //   console.log(JSON.stringify(element));

    //     //   return new Promise(function (resolve) {
    //     //     setTimeout(resolve, interval);
    //     //   });
    //     // });

    //     //this.columnsShown[this.columnsShown.length-1].items.push(item);
    //     console.log("test");


    //   });

    // });
  }



}

