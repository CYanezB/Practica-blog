import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPosts: Post[]

  constructor() {
    this.arrPosts = [{
      titulo: 'hola',
      texto: 'que tal',
      autor: 'paco',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      fecha: new Date(2020 - 12 - 12),
      categoria: 'COCINA'
    },
    {
      titulo: 'adios',
      texto: 'muy bien',
      autor: 'antonia',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Captura_de_pantalla_2021-02-03_005116.png',
      fecha: new Date(2020 - 12 - 12),
      categoria: 'MOTOR'
    },
    {
      titulo: 'te quiero',
      texto: 'genial',
      autor: 'eustaquio',
      imagen: 'https://quees.club/wp-content/uploads/amor.webp',
      fecha: new Date(2020 - 12 - 12),
      categoria: 'AMOR'
    }]
  }

  create(pPost: Post) {
    this.arrPosts.push(pPost)
  }

  getAll() {
    return this.arrPosts
  }

  getByCategoria(pCat: string): any {
    for (let post of this.arrPosts) {
      if (pCat === post.categoria) {
        return post
      }
    }
  }
}