import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rapport-visite',
  templateUrl: './rapport-visite.component.html',
  styleUrls: ['./rapport-visite.component.scss']
})
export class RapportVisiteComponent implements OnInit {
  data = [];

  constructor(private http: HttpClient) {
    this.http.get('https://gr2.sio-carriat.com/gsbcr/?nomRapport').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }
  ngOnInit(): void {
  }

}
