import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EjerciciosPageRoutingModule } from './ejercicios-routing.module';
import { EjerciciosPage } from './ejercicios.page';
import { LogoModule } from '../../components/logo/logo.module';

@NgModule({
  declarations: [EjerciciosPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjerciciosPageRoutingModule,
    LogoModule
  ]
})
export class EjerciciosPageModule { }
