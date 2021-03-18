import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MedecinService {
medecinsSubject = new Subject<any[]>();

emitMedecinSubject() {
  this.medecinsSubject.next(this.medecins.slice());
}

private medecins = [];

getMedecinById(id: number) {
  const medecin = this.medecins.find(
    (s) => {
      return s.id === id;
    }
  );
  return medecin;
}

constructor(private httpClient: HttpClient) { }

getMedecinsFromServer() {
this.httpClient
 .get<any[]>('http://localhost/ruya.sen/PPESLAM2/GSBCR2/serveur/connexion.php')
  .subscribe(
    (response) => {
      this.medecins = response;
      this.emitMedecinSubject();
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}
}