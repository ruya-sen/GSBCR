import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetGsbcrComponent } from './projet-gsbcr/projet-gsbcr.component';
import { LesMedicamentsComponent } from './les-medicaments/les-medicaments.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetGsbcrComponent,
    LesMedicamentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
