import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesarComponent } from './procesar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
  ProcesarComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
   
  ],
  exports:[
   ProcesarComponent
  ]
})
export class procesarModule { }
