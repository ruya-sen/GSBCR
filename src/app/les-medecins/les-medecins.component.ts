import { Component, Input, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-les-medecins',
  templateUrl: './les-medecins.component.html',
  styleUrls: ['./les-medecins.component.scss']
})
export class LesMedecinsComponent implements OnInit {

  @Input() medecinName: string;
  @Input() indexOfMedecin: number;
  @Input() id: number;
  medecins: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
