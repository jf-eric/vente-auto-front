import { Component, OnInit } from '@angular/core';
import {Demande} from '../demande';
import {DemandesService} from '../demandes.service';


@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {
  model;
    demandeModel = new Demande();
  constructor(private demandeService: DemandesService) { }

  ngOnInit() {
  }
    onSubmit() {
        console.log(this.demandeModel);
        this.demandeService.create(this.demandeModel).subscribe(() => {
            console.log('ajout reussi');
        });
    }

}
