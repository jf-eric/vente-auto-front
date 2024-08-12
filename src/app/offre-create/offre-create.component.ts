import {Component, OnInit} from '@angular/core';
import {OffresService} from '../offres.service';
import {OffreRecherche} from '../offre-recherche';
import {MatriculeService} from '../matricule.service';
import {Offre} from '../offre';
import {ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-offre-create',
    templateUrl: './offre-create.component.html',
    styleUrls: ['./offre-create.component.css']
})
export class OffreCreateComponent implements OnInit {
    offres = [];
    matricules: Offre;
id: number;
    offreRecherche = new OffreRecherche();

    constructor(offreService: OffresService , private matriculeService: MatriculeService, private route: ActivatedRoute) {
        offreService.getAll().subscribe(data => {
            this.offres = data;
        });

        this.route.params.subscribe(params => {
            this.id = +params['id'];
            matriculeService.getById(this.id).subscribe(data => {
                this.matricules = data;
                console.log(this.matricules);
            });
        });
    }

    ngOnInit() {
    }
    offreRechercheChangedHandler(offreRecherche: OffreRecherche) {
        this.offreRecherche = Object.assign({}, offreRecherche);
    }
    filtreOffres(type): any[]{
        return this.offres.filter(o => o.type_personne === type);
    }
}
