import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MedicamentsService {
medicamentsSubject = new Subject<any[]>();

emitMedicamentsSubject() {
  this.medicamentsSubject.next(this.medicaments.slice());
}

private medicaments = [];

getMedicamentsById(id: number) {
  const medicaments = this.medicaments.find(
    (s) => {
      return s.id === id;
    }
  );
  return medicaments;
}

constructor(private httpClient: HttpClient) { }

getMedecinsFromServer() {
this.httpClient
 .get<any[]>('http://172.29.1.28/Quentin_chanussot/GSB%20tom/medicaments.php')
  .subscribe(
    (response) => {
      this.medicaments = response;
      this.emitMedicamentsSubject();
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}
}