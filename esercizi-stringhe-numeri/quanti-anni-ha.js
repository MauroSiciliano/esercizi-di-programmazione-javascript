/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var cur_year = 2018;
var date_birth = 1991;
var target_year = 100;
var age = cur_year-date_birth;    // trova l'età.
var year_left = target_year-age;  // trova quanti anni mancano all'obbiettivo dei 100 anni.
console.log(`L'eta è ${age} anni e mancano ${year_left} per arrivare a 100 anni.`);
