import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-les-medecins',
  templateUrl: './les-medecins.component.html',
  styleUrls: ['./les-medecins.component.scss']
})
export class LesMedecinsComponent implements OnInit {

  data = [];
  

  constructor(private http: HttpClient) {
    this.http.get('https://gr2.sio-carriat.com/gsbcr/?noms').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
