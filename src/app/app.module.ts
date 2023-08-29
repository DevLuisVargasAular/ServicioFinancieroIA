import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { procesarModule } from './procesar/procesar.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    procesarModule,
    HttpClientModule,
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
