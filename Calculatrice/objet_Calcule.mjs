// IMPORT DE LA CLASS HISTORIQUE
import { Historique } from "./class_Historique.mjs";

// L'OBJET CALCULE QUI RÉCUPÈRE L'EXPRESSION DÉFINIT PAR LA CLASS CALCULATRICE.
// IL CONVERTIT L'EXPRESSION DE TYPAGE STRING POUR RÉALISER LE CALCULE ARITHMÉTIQUE.
export const Calcule = {
    calculeExpression: (valeurA, valeurB, operateur) => {
        let resultat = '';
        valeurA = parseInt(valeurA);
        valeurB = parseInt(valeurB);
        switch (operateur) {
            case "+":
                resultat = valeurA + valeurB;
                break;
            case "-":
                resultat = valeurA - valeurB;
                break;
            case "*":
                resultat = valeurA * valeurB;
                break;
            case "/":
                resultat = valeurA / valeurB;
                break;
        };
        // HISTORIQUE
        const expression = `${valeurA} ${operateur} ${valeurB} = ${resultat}`;
        Calcule.envoieHistorique(expression);
        // AFFICHE L'EXPRESSION (LE RESULTAT)
        // document.getElementById('affichage').textContent = `${valeurA} ${operateur} ${valeurB} = ${resultat}`;
    },
    // LA MÉTHODE ENVOIEHISORIQUE ENVOIE L'EXPRESSION DANS LA CLASS HISTORIQUE
    envoieHistorique: (expression) => {
        const instanceHistorique = new Historique(expression);
        instanceHistorique.sauvegardeHistorique();
    }
};