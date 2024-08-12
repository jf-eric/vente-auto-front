import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    connecte: boolean;
    currentUser: any;

    constructor(private dialog: MatDialog, private router: Router
    ) {
        const userInStorage = localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(userInStorage);
        this.connecte = !!userInStorage;
    }

    ngOnInit() {
    }

    openDialog() {
        const dialogRef = this.dialog.open(MyDialogComponent, {
            width: '600px',
            data: 'Etes-vous sûr de bien vouloir se déconnecter ?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'Confirm') {
                this.router.navigate(['/login']);
            }
        });
    }

}
