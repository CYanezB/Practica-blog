import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private blogService: BlogService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      fecha: new FormControl(new Date),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      categoria: new FormControl('OTRO', [
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.blogService.create(this.formulario.value)
    this.formulario.reset()
  }
}
