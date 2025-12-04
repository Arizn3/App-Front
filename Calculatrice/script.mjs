// IMPORT DE LA BASE DE DONNÉES
// import { table, getAllData, deleteAllData } from "./sqlite.mjs";

// IMPORT DE LA CLASS CALCULATRICE
import { maCalculatrice } from "./class_Calculatrice.mjs";

// FONCTION RETOUR AU MENU
// const retour = document.getElementById('boutonRetour');
// retour.addEventListener('click', () => {
//     location.replace('/Users/lucas/Documents/Projets/App-Front/Menu/index.html')
// });

// INSTANCE
// const maCalculatrice = new Calculatrice();
// TEST INSTANCE -> (Ok)
// maCalculatrice.verifieValeurs('3');
// maCalculatrice.verifieValeurs('9');
// maCalculatrice.verifieOperateur('+');
// maCalculatrice.verifieValeurs('1');
// maCalculatrice.verifieValeurs('1');
// console.log(maCalculatrice.valeurA);
// console.log(maCalculatrice.operateur);
// console.log(maCalculatrice.valeurB);
// maCalculatrice.envoieExpression();
// console.log(maCalculatrice.valeurA);
// console.log(maCalculatrice.operateur);
// console.log(maCalculatrice.valeurB);

// TEST DB -> (Ok)
// const testB = getAllData.all();
// testB.forEach(occurrence => {
//     console.log(`ID: ${occurrence.id}, Resultat: ${occurrence.expression}`);
// });





//   NOTE À MOI MÊME : 

//       TOUT LES TESTES MARCHE EN LOCALE FILE, ET EN MODE DÉTACHER (IMPORT -> Ok)

//       TESTES EFFECTUER EN LOCALE ET SUR SERVEUR, RESULTAT IDENTIQUE

//       BOUTON RETOUR MARCHE, DONC LE SCRIPT EST BIEN LIÉ AU HTML

//       SANS LE TYPE MODULE DANS LA BALISE SCRIPT, HTML RECONNAIS LA CLASS

//       LES DONNÉES CRÉE POUR TESTE SONT VISIBLE DANS LES LOGS EN LOCALE ET SUR NAVIGATEUR



//  HYPOTHÈSES : 

//       ONCLICK (HTML) AVEC TYPE = "MODULE" ?

//       LE PROBLÈME VIENT IL DE HTML ?

//       IL MANQUE UN ATTRIBUT HTML, OU UNE CONFIGURATION JS, PEUT ÊTRE EN RAPPORT AVEC LE PACKAGE.JSON



// MAJ : 

//       J'AI SUPPRIMER NODE DONC PLUS D'ENVIRONNEMENT DANS LE PROJET