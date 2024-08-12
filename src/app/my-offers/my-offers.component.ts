import {Component, OnInit} from '@angular/core';
import {OffresService} from '../offres.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';

export interface Section {
    name: string;
    updated: Date;
}

@Component({
    selector: 'app-my-offers',
    templateUrl: './my-offers.component.html',
    styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent implements OnInit {
    offres = [];

    constructor(private snackBar: MatSnackBar, private offreService: OffresService, private dialog: MatDialog) {

    }

    ngOnInit() {
        const currentUserStr = localStorage.getItem('currentUser');
        if (currentUserStr) {
            const userID = JSON.parse(currentUserStr).id;
            this.offreService.getAll().subscribe(data => {
                this.offres = data.filter(d => d.userID === userID);
            });
        }
    }

    delete(offreId: number) {
        this.offreService.deleteById(offreId).subscribe(() => {
            this.snackBar.open('Supprimée avec succès.', 'Fermer', {
                duration: 4000,
            });
            this.ngOnInit();
        });
    }

    openDialog(offerId: number) {
        const dialogRef = this.dialog.open(MyDialogComponent, {
            width: '600px',
            data: 'Etes-vous sûr de bien vouloir supprimer l\'offre séléctionnée ?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'Confirm') {
                this.delete(offerId);
            }
        });
    }

}
