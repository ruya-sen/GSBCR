import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-les-medecins',
  templateUrl: './les-medecins.component.html',
  styleUrls: ['./les-medecins.component.scss']
})
export class LesMedecinsComponent implements OnInit {

  data = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost/ruya.sen/PPESLAM2/GSBCR2/serveur/connexion.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
