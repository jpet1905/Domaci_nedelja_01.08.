/*
Data su 4 stringa. 
let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"
*/

let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";

//1. Proveriti koji je string najduzi i ispisati samo njega
let duzina1 = string1.length;
let duzina2 = string2.length;
let duzina3 = string3.length;
let duzina4 = string4.length;
let max = Math.max(duzina1, duzina2, duzina3, duzina4);
if (max == duzina1) {
    console.log(`Najduzi string je: ${string1}`);
} else if (max == duzina2) {
    console.log(`Najduzi string je: ${string2}`);
} else if (max == duzina3) {
    console.log(`Najduzi string je: ${string3}`);
} else {
    console.log(`Najduzi string je: ${stringa}`);
}

console.log("---------------");

//2. Ispisati najkraci string koji sadrzi rec "string"
var minimum;
// trazim kolika je duzina za string koji ispunjava oba uslova
if (string1.indexOf("string") != -1) {
    minimum = string1.length;
}
else if (string2.indexOf("string") != -1 && minimum > string2.length) {
    minimum = string2.length;
}
else if (string3.indexOf("string") != -1 && minimum > string3.length) {
    minimum = string3.length;
}
else if (string4.indexOf("string") != -1 && minimum > string4.length) {
    minimum = string4.length;
}
//trazim kom stringu se podudara duzina sa nadjenim minimumom i ispisujem ga
if (minimum == string1.length) {
    console.log(`Najkraci string koji zadovoljava uslov je: ${string1}`);
} else if (minimum == string2.length) {
    console.log(`Najkraci string koji zadovoljava uslov je: ${string2}`);
} else if (minimum == string3.length) {
    console.log(`Najkraci string koji zadovoljava uslov je: ${string3}`);
} else {
    console.log(`Najkraci string koji zadovoljava uslov je: ${string4}`);
}

console.log("---------------");

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

//uklanjam rec "neki" koja zauzima mesta u stringu zakljucno sa indexom 3
string1 = string1.substr(4);
string2 = string2.substr(4);
string3 = string3.substr(4);
string4 = string4.substr(4);
let finalniString = "";
//pocinjem nalepljivanje stringova koji nemaju zadati deo recenice
if (string1.indexOf("string koji je") == -1) {
    finalniString = finalniString + string1;
}
else if (string2.indexOf("string koji je") == -1) {
    finalniString = finalniString + string2;
}
else if (string3.indexOf("string koji je") == -1) {
    finalniString = finalniString + string3;
}
else if (string4.indexOf("string koji je") == -1) {
    finalniString = finalniString + string4;
}
console.log ("Rezultat sastavljanja stringova je string: "+ finalniString);
