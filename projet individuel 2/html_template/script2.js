
//Créer une fonction qui demande à l’utilisateur à l’aide d’un prompteur, un nombre.
function askNumber() {
    return parseInt(prompt('Merci de saisir un nombre'));

}


//fonction qui prend en paramètre givenNumber et qui se nommera didIWin.
function didIWin(givenNumber) {
    // Pour le moment nous allons considérer que le nombre à deviner est 22.
    var guessNumber = 22;
    //L’ordre dans lequel vous ferez vos conditions est importante, le but est d’executer le moins de code possible. Demandez-vous ce qu’il faut vérifier en premier.
    //Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.

    if (guessNumber == givenNumber) {
        alert('Bravo ! Vous avez deviné le nombre');
    }
    //Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
    else if (guessNumber > givenNumber) {
        alert('Plus grand');
    }
    //Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
    else {
        alert('Plus petit');
    }
}

// Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
function gamePlay() {
    // appel à la function askNumber
    let givenNumber = askNumber();
    // appel à la function didIWin(givenNumber)
    didIWin(givenNumber);
}

//gamePlay();


// ************ Étape 3 ********************* //
// Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
function didIWin(givenNumber) {
    // Pour le moment nous allons considérer que le nombre à deviner est 22.
    var guessNumber = 22;
    //retourner true si l’utilisateur a trouvé le chiffre
    if (guessNumber == givenNumber) {
        return true;
    }
    // false sinon.
    return false;
}
// Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.
function gamePlay() {
    // isWin
    let isWin = false;
    while (!isWin) {
        let givenNumber = askNumber();
        // appel à la function didIWin(givenNumber)
        isWin = didIWin(givenNumber);
    }
}
//fonction qui demande à l’utilisateur à l’aide d’un prompteur, un nombre.
function askNumber() {
    return prompt("Merci de saisir un nombre");
}

// ************ Étape 4 ********************* //
//fonction qui demande à l’utilisateur à l’aide d’un prompteur, un nombre.
function askNumber() {
    return prompt("Merci de saisir un nombre");
}

// ************ Étape 4 ********************* //
//Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.
//fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
function askGuessNumber() {
    return prompt("Merci de saisir un nombre à deviner compris entre 0 et 50");
}

// La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
function didIWin(givenNumber, guessNumber) {
    //retourner true si l’utilisateur a trouvé le chiffre
    if (guessNumber == givenNumber) {
        return true;
    }
    // false sinon.
    return false;
}
// Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.
function gamePlay() {
    // isWin
    let isWin = false;
    while (!isWin) {
        let givenNumber = askNumber();
        let guessNumber = askGuessNumber();
        // appel à la function didIWin(givenNumber,guessNumber)
        isWin = didIWin(givenNumber, guessNumber);

        if (!isWin) {
            alert("Perdu! continuer à jouer");
        }
    }

    alert("Bravo! vous avez gagné");
    document.getElementById("rang").innerHTML = ("0 < ? < 50")
}

gamePlay();