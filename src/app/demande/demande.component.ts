import { Component, OnInit } from '@angular/core';
import {DemandesService} from '../demandes.service';
import {Demande} from '../demande';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandes = [];


  constructor(demandesService: DemandesService) {
      demandesService.getAll().subscribe(data => {
          this.demandes = data;
      });
  }

  ngOnInit() {
  }

}
