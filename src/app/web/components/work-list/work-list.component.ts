import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
  workExperienceItems = [
    {
      jobTitle: 'Fullstack Developer',
      company: 'NTT Data',
      dates: 'Jan 2020 - Present',
      highlights: [
        'Developed and maintained web applications using Angular and Java.',
        'Designed and implemented RESTful APIs using Node.js and Spring.',
        'Implemented automated testing using Jasmine, Karma and Junit.'
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
