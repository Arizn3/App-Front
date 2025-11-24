// IMPORT DE L'INSTANCE DE LA CLASS FORMULAIRE DU MODULE CLASS_FORMULAIRE
import { formulaire } from "./class_formulaire.mjs";

// RÉCUPÉRATION DES FONCTIONS DU MODULE FONCTION_ANIMATION.JS
import { changementInscription, changementConnexion } from "./fonction_animation_CSS.mjs";

// APPEL DE LA MÉTHODE PRINCIPALE DE LA CLASS FORMULAIRE
const enregistrement = document.getElementById('valider');
enregistrement.addEventListener('click', () => {
    formulaire.envoieFormulaire();
});

// APPEL DE LA FONCTION ANIMATION INSCRIPTION
// INERFACE D'INSCRIPTION
const boutonInscription = document.getElementById('inscription');
boutonInscription.addEventListener('click',
    changementInscription,
);

// APPEL DE LA FONCTION ANIMATION CONNEXTION
// INTERFACE DE CONNEXION
const boutonBack = document.getElementById('retour');
boutonBack.addEventListener('click',
    changementConnexion,
);