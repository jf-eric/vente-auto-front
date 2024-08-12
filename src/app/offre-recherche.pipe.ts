import {Pipe, PipeTransform} from '@angular/core';
import {OffreRecherche} from './offre-recherche';

@Pipe({
    name: 'offreRecherchePipe',
    pure: false
})
export class OffreRecherchePipe implements PipeTransform {
    transform(offres: any[], offreRecherche: OffreRecherche): any[] {
        if (offres) {
            let res = offres;
            if (offreRecherche.modele) {
                res = offres.filter(o => o['modele'] === offreRecherche.modele);
            } else if (offreRecherche.marque) {
                res = offres.filter(o => o['marque'] === offreRecherche.marque);
            }
            if (offreRecherche.prix) {
                res = res.filter(o => o['prix'] <= offreRecherche.prix);
            }
            if (offreRecherche.ville) {
                res = res.filter(o => o['ville'] === offreRecherche.ville);
            }
            return res;
        }
        return offres;
    }
}
