import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  categories = [
    { id: 1, name: 'Developement' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];

  constructor() {

  }

  submit(course: any) {
   console.log(course);
  }


}
