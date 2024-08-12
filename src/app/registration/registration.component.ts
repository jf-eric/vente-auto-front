import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    formGroup: FormGroup;
    hide = true;
    user = new User();
    errorOnCreate: boolean;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    }

    ngOnInit() {

        this.errorOnCreate = false;
        this.formGroup = this.formBuilder.group({
            mail: ['', [Validators.required, Validators.email]],
            nom: ['', [Validators.required]],
            prenom: ['', []],
            pseudo: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    getErrorMessage() {
        return this.formGroup.get('mail').hasError('required') ? 'Vous devez renseigner un email' :
            this.formGroup.get('mail').hasError('email') ? 'Votre mail n\'est pas valide' :
                '';
    }

    create() {
        this.userService.create(this.user).subscribe(() => {
            this.router.navigate(['/login']);
        }, () => {
            this.errorOnCreate = true
        });
    }
}
