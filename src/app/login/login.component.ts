import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    FormGroup1: FormGroup;
    FormGroup3: FormGroup;
    isLinear = false;

    model: any = {};
    returnUrl: string;
    notAuthorized: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.notAuthorized = false;
        this.FormGroup1 = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.FormGroup3 = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {


        const pseudo = this.FormGroup1.get('firstCtrl').value;
        const password = this.FormGroup3.get('thirdCtrl').value;

        this.authenticationService.login(pseudo, password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log('Pas authentifié');
                    this.notAuthorized = true;
                });
    }
}
