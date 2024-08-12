import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MarkModelServiceService} from '../mark-model-service.service';
import {MatSelectChange} from '@angular/material';
import {OffreRecherche} from '../offre-recherche';
import {MadagascarService} from '../madagascar.service';

@Component({
    selector: 'app-recherche',
    templateUrl: './recherche.component.html',
    styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
    marques = [];
    modeles = [];
    villes = [];

    offreRecherche = new OffreRecherche();

    @Output() offreRechercheChanged: EventEmitter<OffreRecherche> = new EventEmitter();

    constructor(markModelService: MarkModelServiceService, madagascarService: MadagascarService) {
        markModelService.getAll().subscribe(data => {
            this.marques = data;
        });
        madagascarService.getAll().subscribe(data => {
            const villesProvinces = data.map(d => d.models);
            villesProvinces.forEach((vp) => {
                this.villes = this.villes.concat(vp).sort((a, b) => a.title.localeCompare(b.title));
            });
        });
    }

    ngOnInit() {
    }

    marcqueChange(change: MatSelectChange) {
        const mq = this.marques.find(m => m['value'] === change.value);
        if (mq) {
            this.modeles = mq['models'];
        }
    }

    find() {
        this.offreRechercheChanged.emit(this.offreRecherche);
    }

    reset() {
        this.offreRecherche = new OffreRecherche();
        this.find();
    }
}
