import { SummaryPipe } from './summary.pipe';
import { AuthorService } from './author/author.service';
import { CategoryService } from './category/category.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CategoryComponent,
    AuthorComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
