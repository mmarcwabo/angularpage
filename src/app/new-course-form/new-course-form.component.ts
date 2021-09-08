import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

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

  form = new FormGroup(
    {
      topics: new FormArray(
        []
      )
    }
  );

  constructor() {

  }

  submit(course: any) {
    console.log(course);
  }


}
