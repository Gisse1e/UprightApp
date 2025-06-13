import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProgresoPageRoutingModule } from './progreso-routing.module';
import { ProgresoPage } from './progreso.page';
import { LogoModule } from '../../components/logo/logo.module';

@NgModule({
  declarations: [ProgresoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoPageRoutingModule,
    LogoModule
  ]
})
export class ProgresoPageModule { }
