import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // TODO: Implement login logic
    console.log('Login attempt with:', this.email);
    this.router.navigate(['/home']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
