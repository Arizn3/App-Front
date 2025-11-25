// IMPORT DU MODULE SQLITE3 DE LA LIBRAIRIE NODE.JS
import db from "better-sqlite3";
const madb = new db("./Calculatrice/database.db");

// TABLE
const table = madb.exec(`CREATE TABLE IF NOT EXISTS historique (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expression TEXT
    );`);

// METHODES POUR AFFICHER TOUTES LES DONNÉES
const getAllData = table.prepare("SELECT * FROM historique");
// MÉTHODES POUR SUPPRIMEZ TOUTES LES DONNÉES
const deleteAllData = table.prepare("DELETE FROM historique");
// EXPORT DES VARIABLES
export { table, getAllData, deleteAllData };



// INSERTION DE DONNEES -> TEST (Ok)
// const insert = table.prepare("INSERT INTO historique (expression) VALUES ('3 + 9 = 12');");
// const testA = insert.run();

// APPEL DE LA TABLE -> TEST (Ok)
// const testB = getAllData.all();
// testB.forEach(occurrence => {
//     console.log(`ID: ${occurrence.id}, Resultat: ${occurrence.expression}`);
// });

// SUPPRIME TABLE -> TEST (Ok)
// const effaceTable = deleteAllData.run();