import { CategoryService } from '../category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = "List of categories";
  categories;

  constructor(service: CategoryService) { 
    this.categories = service.getCategories();
    
  }

  ngOnInit(): void {
  }

}
