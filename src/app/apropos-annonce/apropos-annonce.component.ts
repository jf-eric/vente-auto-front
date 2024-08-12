import {Component, OnInit} from '@angular/core';
import {OffresService} from '../offres.service';
import {Offre} from '../offre';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-apropos-annonce',
    templateUrl: './apropos-annonce.component.html',
    styleUrls: ['./apropos-annonce.component.css']
})
export class AproposAnnonceComponent implements OnInit {

    id: number;
    offreModel: Offre;

    constructor(offreService: OffresService, private route: ActivatedRoute) {

        this.route.params.subscribe(params => {
            this.id = +params['id'];
            offreService.getById(this.id).subscribe(data => {
                this.offreModel = data;
                console.log(this.offreModel);
            });
        });
    }

    ngOnInit() {
    }

}
