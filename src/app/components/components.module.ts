import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    IonicModule,
    FormsModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ComponentsModule { }
