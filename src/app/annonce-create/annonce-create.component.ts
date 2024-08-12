import {Component, OnInit} from '@angular/core';
import {MarkModelServiceService} from '../mark-model-service.service';
import {MatSelectChange, MatSnackBar} from '@angular/material';
import {OffresService} from '../offres.service';
import {Offre} from '../offre';
import {Router} from '@angular/router';
import {FileHolder} from 'angular2-image-upload';
import {MadagascarService} from '../madagascar.service';

@Component({
    selector: 'app-annonce-create',
    templateUrl: './annonce-create.component.html',
    styleUrls: ['./annonce-create.component.css']
})
export class AnnonceCreateComponent implements OnInit {

    matriculeNotValid = false;

    images = [];
    matricules = [];

    rootUrl = 'http://localhost:8080/';
    imgUploadUrl = this.rootUrl + 'vente-auto-back/images';

    offreModel = new Offre();

    annonceService: any;
    checked = false;
    imageUrl = 'assets/img/default_image.jpg';
    test = 'assets/img/default_image.jpg';
    Fileuploid: File = null;
    marques = [];

    provinces = [];
    villes = [];
    km: number;
    prix: number;
    modeles = [];
    Annees: string[] = [
        '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005',
        '2004', '2003', '2002', '2001', '2000'
    ];
    Carburants: string[] = [
        'Essence', 'Diesel', 'Electrique'
    ];
    Boites: string[] = [
        'Manuel', 'Automatique'
    ];
    private addForm: any;

    constructor(private  snackBar: MatSnackBar, private markModelService: MarkModelServiceService, private madagascarService: MadagascarService, private offreService: OffresService, private router: Router) {
        markModelService.getAll().subscribe(data => {
            this.marques = data;
        });
        madagascarService.getAll().subscribe(data => {
            this.provinces = data;
        });
        this.offreService.getAllMatricules().subscribe(data => {
            this.matricules = data;
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

    madaChange(change: MatSelectChange) {
        const pro = this.provinces.find(y => y['value'] === change.value);
        if (pro) {
            this.villes = pro['models'];
        }
    }

    onSubmit() {
        const currentUserStr = localStorage.getItem('currentUser');
        if (currentUserStr) {
            const userID = JSON.parse(currentUserStr).id;
            this.offreModel.userID = userID;
        }
        console.log(this.offreModel);
        this.offreModel.images = this.images;
        if (this.offreModel.matricule && this.matricules.find((m) => m.matricule === this.offreModel.matricule)) {
            this.matriculeNotValid = false;
            this.offreService.create(this.offreModel).subscribe(() => {
                this.snackBar.open('Ajout avec succès et Immatriculation validée.', 'Fermer', {
                    duration: 4000,
                });
                this.router.navigate(['home/offre-create']);
            });
        } else {
            this.matriculeNotValid = true;
        }
    }


    onUploadFinished(file: FileHolder) {
        const id = file.serverResponse.response.json().id;
        this.images.push(id);
        console.log(this.images);
    }

    onRemoved(file: FileHolder) {
        const id = file.serverResponse.response.json().id;
        this.images = this.images.filter(i => i !== id);
        console.log(this.images);
    }

    onUploadStateChanged(state: boolean) {
        console.log(state);
    }

}