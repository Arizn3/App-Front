// CLASS HISTORIQUE QUI SERA UTILISER POUR ENREGISTRER L'EXPRESSION DANS LA BD SQLITE
export class Historique {
    constructor(expression) {
        this.expression = expression;
    };

    sauvegardeHistorique() {
        // UN LOG A ÉTÉ PLACER LA POUR TEST -> (Ok)
        console.log(this.expression);
        // METHODE QUERY DE LA CLASS POUR ENREGISTRER LES DONNEES
        // recuperationHistorique();
        // METHODE QUERY DE LA CLASS QUI AFFICHE LES DONNES
    };

    recuperationHistorique() {
        // INSTRUCTIONS POUR AFFICHER LES DONNÉES
    };
};