const fs = require('fs');
const cheminFichier = 'dir_list.txt';
const baseurl = 'http://127.0.0.1:5000/';
//Lire les contenus du fichier et transformer en tableau 
const listeMots = fs.readFileSync(cheminFichier, "utf8").toString().split("\n");

const bruteForce = async () => {
    const tab = []
    //Teste chaque mot de la liste avec l'url de base avec fetch 
    for(const elements of listeMots){
        const response = await fetch(baseurl+elements)
        console.log(`Tester : ${baseurl}${elements}`);
        //Pour chaque element qui ne retourne pas du 404 , on le met dans un tableau qu'on vient de declarer juste en haut
        if(response.status!=404){
            tab.push(elements)
        }
    }
    //Le resutat final
    console.log("Les resultats : " + tab);
}
bruteForce();