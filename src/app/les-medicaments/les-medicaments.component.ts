import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MedicamentsService } from '../services/medicaments.service';


@Component({
  selector: 'app-les-medicaments',
  templateUrl: './les-medicaments.component.html',
  styleUrls: ['./les-medicaments.component.scss']
})
export class LesMedicamentsComponent implements OnInit {

  data = [];

  constructor(private http: HttpClient) {
    this.http.get('http://172.29.1.28/Quentin_chanussot/GSB%20tom/medicaments.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      }, error => console.error(error));
    }
    
  

  ngOnInit(): void {
  }

}
