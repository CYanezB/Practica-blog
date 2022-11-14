import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  posts: Post[]
  arrCategorias: string[]

  constructor(private blogService: BlogService) {
    this.posts = []
    this.arrCategorias = []
  }

  ngOnInit(): void {
    this.posts = this.blogService.getAll()
    this.arrCategorias = this.blogService.getCategorias()
    console.log(this.arrCategorias)
  }

  clickCategoria($event: any) {
    if ($event.target.value === 'todos') {
      this.posts = this.blogService.getAll()
    } else {
      this.posts = this.blogService.getByCategoria($event.target.value)
    }
  }

}
