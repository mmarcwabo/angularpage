import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template :`
    <h2>List of Authors</h2>
    <ul>
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
  `,
  //templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;

  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
