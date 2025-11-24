// FONCTION RETOUR AU MENU
const retour = document.getElementById('retourMenu');
retour.addEventListener('click', () => {
    location.replace('/Users/lucas/Documents/Projets/App-Front/Menu/index.html');
});

// CLASS FORMULAIRE JAVASCRIPT V1
// ENREGISTRE LES DONNÉES DU FORMULAIRE EN FORMAT JSON DANS LE LOCALSTORAGE 
class Formulaire {
    constructor(id) {
        this.id = id;
        this.formulaire = document.getElementById(id);
        this.objetFormulaire = new FormData(this.formulaire);
        this.liste = new Array();
    };

    //ENVOIE DES DONNÉES DANS LE LOCALSTORAGE
    envoieFormulaire() {
        this.objetFormulaire = new FormData(this.formulaire);
        this.objetFormulaire.forEach((value, key) => {
            if (value !== '') {
                this.liste.push([key, value]);
            };
        });
        let JSONListe = JSON.stringify(this.liste);
        localStorage.setItem('test', JSONListe)
        document.getElementById('formulaire').reset();
    };
};

// INSTANCE DE LA CLASS FORMULAIRE
export const formulaire = new Formulaire('formulaire');