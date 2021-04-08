import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-les-medicaments',
  templateUrl: './les-medicaments.component.html',
  styleUrls: ['./les-medicaments.component.scss']
})
export class LesMedicamentsComponent implements OnInit {

  data = [];

  constructor(private http: HttpClient) {
    this.http.get('https://gr2.sio-carriat.com/gsbcr/?nomMed').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      }, error => console.error(error));
    }
    
  

  ngOnInit(): void {
  }

}
