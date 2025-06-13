import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  selectedOption: string = '';
  selectedDate: string = '';
  usuario: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardar() {
    // TODO: Implement registration logic
    console.log('Registration attempt with:', {
      nombre: this.nombre,
      apellido: this.apellido,
      selectedOption: this.selectedOption,
      selectedDate: this.selectedDate,
      usuario: this.usuario
    });
  }
}
