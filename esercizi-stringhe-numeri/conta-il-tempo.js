/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var second_tot = 12560;                            // secondi totali
var h_sec = second_tot/3600;                       // trova le ore compresa la frazione di secondi restanti
var h = Math.trunc(h_sec);                         // arrotonda in ore
var less_h = h_sec-h;                              // ricava la frazione di secondi rimasti
var m_sec = less_h*60;                             // trova i minuti compresa la frazione di secondi restanti
var m = Math.trunc(m_sec);                         // arrotonda i minuti
var less_m = m_sec-m;                              // ricava la frazione di secondi rimasti
var s = Math.trunc(less_m*60);                     // trova e arrotonda i secondi
console.log(`${h} Ore ${m} Minuti ${s} Secondi`);
