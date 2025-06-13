import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo-container">
      <div class="logo-wrapper">
        <img [src]="'assets/img/logo.png'" [alt]="'Upright Logo'" [style.width.px]="size">
      </div>
      <div class="text-container">
        <h1 class="title">UpRight</h1>
        <p *ngIf="showSlogan" class="slogan">Tu recordatorio para una postura saludable</p>
      </div>
    </div>
  `,
  styles: [`
    .logo-container {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-left: 16px;
    }
    .logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text-container {
      display: flex;
      flex-direction: column;
    }
    .title {
      color: #1A5E7A;
      font-size: 20px;
      font-weight: bold;
      margin: 0;
    }
    .slogan {
      color: #1A5E7A;
      font-size: 10px;
      margin: 0;
    }
  `],
  standalone: false
})
export class LogoComponent {
  @Input() size: number = 40;
  @Input() showSlogan: boolean = true;
} 