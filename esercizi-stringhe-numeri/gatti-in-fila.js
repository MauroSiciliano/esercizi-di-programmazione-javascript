/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var cats = 44
var in_line = 6;
var numLine = Math.ceil(cats/in_line); // trova quante file
var missing = (numLine*in_line)-cats;  // trova quanti gatti mancano

console.log(`${cats} gatti in fila per ${in_line} si unirono compatti in ${numLine} file. Nell'ultima fila rimasero ${missing} posti gatto disponibili.`);
