/*na osnovu kolicine i cene artikla, ispisati ukupnu cenu
kolicina je zadata u gramima
cena je zadata po kilogramu
Dopuniti zadatak kolicinom novca i ispisati racun
(ako nema dovoljno novca, ispisati poruku)
*/

let kolicinaUGramima = 200;
let cenaPoKg = 418;
let ukupanIznos = (kolicinaUGramima / 1000) * cenaPoKg;
console.log (`Iznos za uplatu je ${ukupanIznos} dinara`);
//sad dopuna zadatka
let raspoloziviBudzet = 500;
if (raspoloziviBudzet >= ukupanIznos) {
    console.log (`Vas kusur je ${raspoloziviBudzet - ukupanIznos} dinara`);
    console.log (`Hvala na kupovini!`)
} else {
    console.log (`Zao nam je. Nemate dovoljno novca za kupovinu.`);
}
