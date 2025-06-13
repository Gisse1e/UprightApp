import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo-container">
      <img [src]="'assets/img/logo.png'" [alt]="'Upright Logo'" [style.width.px]="size">
      <p *ngIf="showSlogan" class="slogan">Tu compañero para una mejor postura</p>
    </div>
  `,
  styles: [`
    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .slogan {
      color: #1A5E7A;
      font-size: 12px;
      margin: 0;
    }
  `],
  standalone: false
})
export class LogoComponent {
  @Input() size: number = 40;
  @Input() showSlogan: boolean = false;
} 