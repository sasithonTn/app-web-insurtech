import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { ContentComponent } from './content/ContentComponent';








@NgModule({
  declarations: [
    ContentComponent

  ],
  imports: [
    ButtonModule,
    BrowserModule

    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }