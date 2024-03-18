//acceder au fichier et lire
//lire chaque ligne
//tester sur le site
//retourner la liste des chemins qui existent1
const fs = require('fs');
const readline = require('readline');
const fetch = require('node-fetch');

const cheminFichier = 'dir_list.txt';
const baseurl = 'http://127.0.0.1:5000/';
const tab = []
// Une interface de lecture
const lecteur = readline.createInterface({
    input: fs.createReadStream(cheminFichier),
    output: process.stdout,
    terminal: false
});

// Fonction pour lire chaque ligne du fichier
lecteur.on('line', async (ligne) => {
    console.log(ligne);  
            const response = await fetch(baseurl + ligne);
            if(response.ok){
                tab.push(ligne)
            }
              
});
console.log(tab);

// Gérer les erreurs de lecture du fichier
lecteur.on('error', (erreur) => {
    console.error('Erreur lors de la lecture du fichier:', erreur);
});

