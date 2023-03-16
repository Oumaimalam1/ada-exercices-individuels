function askName() {

    let name = prompt("Merci de saisir votre nom");

    document.getElementById("hello").innerHTML = "<img class='g-emoji' src='https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png'></img >" + "Bonjour" + " " + name

}


function askBirthYear() {


    let anneeNaiss = prompt("Merci de saisir votre année de naissance");

    let anneeActuelle = new Date().getFullYear();

    let annee = anneeActuelle - anneeNaiss;

    let moisNaiss = prompt("Merci de saisir votre mois de naissance en chiffre");

    let moisActuel = new Date().getUTCMonth();
    console.log(moisActuel)

    let mois = moisActuel - moisNaiss;

    if (mois < 0) {

        annee = annee - 1;
    }
    let absMois = Math.abs(mois);


    let age = annee + " ans" + " et " + absMois + " mois";

    document.body.innerHTML += '<h3> vous avez ' + age + ' </h3>';

    console.log(age);


    // SOIT : document.getElementById("age").innerHTML = "vous avez" + ' ' + age + ' ' + "ans"

    //ctrl + x pour supprimer une ligne
}

askName();

askBirthYear();







