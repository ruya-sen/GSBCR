import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetGsbcrComponent } from './projet-gsbcr/projet-gsbcr.component';
import { LesMedicamentsComponent } from './les-medicaments/les-medicaments.component';
import { LesMedecinsComponent } from './les-medecins/les-medecins.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetGsbcrComponent,
    LesMedicamentsComponent,
    LesMedecinsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
