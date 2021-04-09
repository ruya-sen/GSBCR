import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetGsbcrComponent } from './projet-gsbcr/projet-gsbcr.component';
import { LesMedicamentsComponent } from './les-medicaments/les-medicaments.component';
import { RouterModule, Routes } from '@angular/router';
import { LesMedecinsComponent } from './les-medecins/les-medecins.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { RapportVisiteComponent } from './rapport-visite/rapport-visite.component';
import { FilterPipe } from './filter.pipe';
import { MedecinsDetailsComponent } from './medecins-details/medecins-details.component';



const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent},
  { path: 'les-medecins', component: LesMedecinsComponent},
  { path: 'les-medicaments', component: LesMedicamentsComponent},
  { path: 'rapport', component: RapportVisiteComponent},
  { path: 'details-medecins/:id', component: MedecinsDetailsComponent},
  { path: '',component: LesMedecinsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ProjetGsbcrComponent,
    LesMedicamentsComponent,
    LesMedecinsComponent,
    ConnexionComponent,
    RapportVisiteComponent,
    FilterPipe,
    MedecinsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
