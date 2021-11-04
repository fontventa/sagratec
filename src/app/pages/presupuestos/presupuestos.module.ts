import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresupuestosPageRoutingModule } from './presupuestos-routing.module';

import { PresupuestosPage } from './presupuestos.page';
import { NgxPicaModule } from '@digitalascetic/ngx-pica';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PresupuestosPageRoutingModule,
    NgxPicaModule
  ],
  declarations: [PresupuestosPage]
})
export class PresupuestosPageModule { }
