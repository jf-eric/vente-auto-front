import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule, MatDialogModule,
    MatFormFieldModule, MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioButton,
    MatRadioModule,
    MatSidenavModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import {OffreCreateComponent} from './offre-create/offre-create.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule, Routes} from '@angular/router';
import {AnnonceCreateComponent} from './annonce-create/annonce-create.component';


import {MatSelectModule} from '@angular/material/select';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemandeComponent} from './demande/demande.component';
import {MatFileUploadModule} from 'angular-material-fileupload';
import {LayoutModule} from '@angular/cdk/layout';
import {RegistrationComponent} from './registration/registration.component';
import {MyOffersComponent} from './my-offers/my-offers.component';
import {MyRequestsComponent} from './my-requests/my-requests.component';
import {HomeComponent} from './home/home.component';
import {RechercheComponent} from './recherche/recherche.component';
import {AproposAnnonceComponent} from './apropos-annonce/apropos-annonce.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContacterVendeurComponent} from './contacter-vendeur/contacter-vendeur.component';
import {DemandeCreateComponent} from './demande-create/demande-create.component';
import {ImageHomeComponent} from './image-home/image-home.component';
import {OffreRecherchePipe} from './offre-recherche.pipe';
import {AuthGuard} from './auth.guard';
import {InformationComponent} from './information/information.component';
import {ImageUploadModule} from 'angular2-image-upload';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        OffreCreateComponent,
        ToolbarComponent,
        AnnonceCreateComponent,
        LoginComponent,
        DemandeComponent,
        RegistrationComponent,
        MyOffersComponent,
        MyRequestsComponent,
        HomeComponent,
        RechercheComponent,
        AproposAnnonceComponent,
        ContacterVendeurComponent,
        DemandeCreateComponent,
        ImageHomeComponent,
        OffreRecherchePipe,
        InformationComponent,
        MyDialogComponent

    ],

    imports: [
        ImageUploadModule.forRoot(),
        NgbModule,
        MatGridListModule,
        MatListModule,
        LayoutModule,
        MatSidenavModule,
        MatFileUploadModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTabsModule,
        MatCardModule,
        MatDatepickerModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatSelectModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        RouterModule.forRoot(
            [
                {path: 'registration', component: RegistrationComponent},
                {path: 'login', component: LoginComponent},
                {
                    path: 'home', component: HomeComponent,
                    children: [
                        {path: 'offre-create', component: OffreCreateComponent},
                        {path: 'annonce-create', component: AnnonceCreateComponent, canActivate: [AuthGuard]},
                        {path: 'demande', component: DemandeComponent},
                        {path: 'my-offers', component: MyOffersComponent, canActivate: [AuthGuard]},
                        {path: 'my-requests', component: MyRequestsComponent},
                        {path: 'apropos-annonce/:id', component: AproposAnnonceComponent},
                        {path: 'contacter-vendeur', component: ContacterVendeurComponent},
                        {path: 'demande-create', component: DemandeCreateComponent, canActivate: [AuthGuard]},
                        {path: 'image-home', component: ImageHomeComponent},
                        {path: 'information', component: InformationComponent},

                    ]
                },
                {path: '**', redirectTo: '/home/image-home'}
            ]
        )
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [MyDialogComponent]
})
export class AppModule {
}
