// IMPORT DE L'OBJET CALCULE
import { Calcule } from "./objet_Calcule.mjs";

// CLASS CALCULATRICE QUI RÉCUPÈRE LA VALEUR A, LA VALEUR B ET LA VALEUR 
// D'OPERATEUR POUR CRÉE UNE EXPRESSION
class Calculatrice {
    constructor() {
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
    verifieValeurs(nb) {
        if (this.operateur == '') {
            this.valeurA += nb;
            // document.getElementById('affichage').textContent = `${this.valeurA}`;
        } else {
            this.valeurB += nb;
            // document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur} ${this.valeurB}`;
        };
    };
    verifieOperateur(operateur) {
        this.operateur = operateur;
        // document.getElementById('affichage').textContent = `${this.valeurA} ${this.operateur}`;
    };
    // LA FONCTION ENVOIEEXPRESSION ENVOIE L'ÉXPRESSION À L'OBJET CALCULE
    envoieExpression() {
        Calcule.calculeExpression(this.valeurA, this.valeurB, this.operateur);
        // RESET DE FIN DE CALCULE
        this.valeurA = '';
        this.valeurB = '';
        this.operateur = '';
    };
    // FONCTION FUTUR POUR UN RESET VOLONTAIRE DES CHAMPS
    // clear() {
    //     this.valeurA = '';
    //     this.valeurB = '';
    //     this.operateur = '';
    //     this.resultat = '';
    // };
};

export const maCalculatrice = new Calculatrice();