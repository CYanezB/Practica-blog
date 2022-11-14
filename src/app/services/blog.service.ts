import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPosts: Post[]
  categorias: string[];

  constructor() {
    this.arrPosts = [{
      titulo: 'hola',
      texto: 'Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias. Hablamos de un país paraisomático en el que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum, decidió aventurarse y salir al vasto mundo de la gramática.',
      autor: 'paco',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      fecha: new Date(2020 - 12 - 12),
      categoria: 'COCINA'
    },
    {
      titulo: 'adios',
      texto: 'Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias. Hablamos de un país paraisomático en el que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum, decidió aventurarse y salir al vasto mundo de la gramática.',
      autor: 'antonia',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Captura_de_pantalla_2021-02-03_005116.png',
      fecha: new Date(2020 - 12 - 12),
      categoria: 'MOTOR'
    },
    {
      titulo: 'te quiero',
      texto: 'Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias. Hablamos de un país paraisomático en el que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum, decidió aventurarse y salir al vasto mundo de la gramática.',
      autor: 'eustaquio',
      imagen: 'https://quees.club/wp-content/uploads/amor.webp',
      fecha: new Date(2020 - 12 - 12),
      categoria: 'AMOR'
    }]
    this.categorias = []
  }

  create(pPost: Post) {
    this.arrPosts.push(pPost)
    localStorage.setItem('blog', JSON.stringify(this.arrPosts))
    return this.arrPosts = JSON.parse(localStorage.getItem('blog')!)
  }

  getCategorias() {
    for (let post of this.arrPosts) {
      this.categorias.push(post.categoria!)
    }
    let cat = [...new Set(this.categorias)]
    return cat
  }
  getAll() {
    if (localStorage.getItem('blog')) {
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!)
    }
    localStorage.setItem('blog', JSON.stringify(this.arrPosts))
    return this.arrPosts = JSON.parse(localStorage.getItem('blog')!)

  }

  getByCategoria(pCategoria: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === pCategoria)
  }
}