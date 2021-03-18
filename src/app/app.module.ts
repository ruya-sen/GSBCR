import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetGsbcrComponent } from './projet-gsbcr/projet-gsbcr.component';
import { LesMedicamentsComponent } from './les-medicaments/les-medicaments.component';
import { RouterModule, Routes } from '@angular/router';
import { LesMedecinsComponent } from './les-medecins/les-medecins.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'les-medecins', component: LesMedecinsComponent },
  { path: 'les-medicaments', component: LesMedicamentsComponent},
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    ProjetGsbcrComponent,
    LesMedicamentsComponent,
    LesMedecinsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
