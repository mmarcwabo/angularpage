import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  content = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci sem, ornare non cursus in, venenatis eu lacus. Aenean tincidunt venenatis faucibus. Quisque accumsan urna nec massa volutpat interdum. Nulla sed sapien eros. Nunc at finibus est, id interdum diam. Fusce auctor accumsan dolor, ac vulputate lectus tincidunt nec. Vivamus luctus mauris a condimentum tempus. Suspendisse purus mauris, ultrices nec elementum non, luctus vel eros.
`;
  blogs = [];
  constructor() { }

  ngOnInit(): void {
  }

}
