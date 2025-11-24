// FICHIER DE FONCTIONS POUR LA MANIPULATION GRAPHIQUE DU FORMULAIRE SELON LA CONNEXION OU L'INSCRIPTION
// FONCTIONS POUR FACILITER L'ÉCRITURE DU CODE POUR LES MODIFICATIONS CSS 
function recupereDiv(id) {
    return document.getElementById(id).parentNode
};

function modifieStyle(id) {
    recupereDiv(id).classList.add('aff');
};

function removeStyle(id) {
    recupereDiv(id).classList.remove('aff');
};

// AFFICHAGE DE L'INTERFACE D'INSCRIPTION
export function changementInscription() {
    document.getElementById('titre').textContent = "Crée ton compte !";
    recupereDiv('inscription').classList.add('disp');
    recupereDiv('connexion').classList.add('disp');
    modifieStyle('paragraphe');
    modifieStyle('valider');
    modifieStyle('retour');
    modifieStyle('nom');
    modifieStyle('age');
};

// AFFICHAGE DE L'INTERFACE DE CONNEXION
export function changementConnexion() {
    document.getElementById('titre').textContent = "Bienvenue !";
    document.getElementById('formulaire').reset();
    recupereDiv('inscription').classList.remove('disp');
    recupereDiv('connexion').classList.remove('disp');
    removeStyle('paragraphe');
    removeStyle('valider');
    removeStyle('retour');
    removeStyle('nom');
    removeStyle('age');
};