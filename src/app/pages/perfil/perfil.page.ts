import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  fechaNacimiento: Date;
  peso: number;
  altura: number;
  nivelActividad: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  usuario: Usuario | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí deberías obtener los datos del usuario desde tu servicio de autenticación
    // Por ahora, usaremos datos de ejemplo
    this.usuario = {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@ejemplo.com',
      telefono: '123-456-7890',
      fechaNacimiento: new Date('1990-01-01'),
      peso: 70,
      altura: 175,
      nivelActividad: 'Intermedio'
    };
  }
}
