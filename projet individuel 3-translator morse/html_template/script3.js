//Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère
function getLatinCharacterList(string) {
  return string.split("");
}
//Tester la fonction en lui donnant une chaine de caractères “Hello, world”,
let restult = getLatinCharacterList("Hello, world");
console.log(restult);

// Étape 2
/*
  À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table 
  de correspondance entre les caractères alphabets latin et l’alphabet morse.
*/
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  ' ': '/',
};

// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
function translateLatinCharacter(caract) {
  return latinToMorse[caract.toUpperCase()]; //Attention: la table de correspondance ne contient que des caractères majuscules.
}

let latinToMorseCaract = translateLatinCharacter("A");
console.log(latinToMorseCaract);

/**
 * Étape 3
  Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1,
  pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
 */
function encode(texte) {
  var latinCharacterList = getLatinCharacterList(texte);
  var morseText = "";
  for (let i = 0; i < latinCharacterList.length; i++) {
    morseText += translateLatinCharacter(latinCharacterList[i]) + ' ';
  }
  return morseText;
}
console.log(encode("omy"));



//étape 4 *******************************************************************************************

function getMorseCharacterList(string) {
  return string.split(" ");
}

let restult2 = getMorseCharacterList(".- -... / -.-. -..");

console.log(restult2);


const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H",
  '/': ' ',
}

function translateMorseCharacter(caract) {
  return morseToLatin[caract];
}

let MorseToLatinCaract = translateMorseCharacter('-');
console.log(MorseToLatinCaract);


function decode(texte) {
  var morseCharacterList = getMorseCharacterList(texte);
  var morseText = "";
  for (let i = 0; i < morseCharacterList.length; i++) {
    morseText += translateMorseCharacter(morseCharacterList[i]);
  }
  return morseText;
}
console.log(decode(".-.. .- -- .-. .- -... . - / --- ..- -- .- .. -- .-"));


//étape 5 ***********************************************
function translateToMorse() {
  let texte = document.getElementById("textToTranslate").value
  texte = encode(texte)
  document.getElementById("textTranslate").value = texte

}

function translateToLatin() {
  console.log("translateToLatin");
  let texte = document.getElementById("textToTranslate").value;
  texte = decode(texte);
  console.log(texte);
  document.getElementById("textTranslate").value = texte;

}
function clearValue() {
  document.getElementById("textTranslate").value = '';
  document.getElementById("textToTranslate").value = '';
}