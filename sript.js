
//////////////////
//DEBUG
/////////////////

// console.log("hello World!");


///////////////////////////////
// CONSEGNA DELL'ESERCIZIO
//////////////////////////////


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// Prima di scrivere il codice impostate il ragionamento nei commenti!

// Bonus:
// Applicare dei controlli sull'input dell'utente


//////////////////////
//RAGIONAMENTO <3
/////////////////////


// DATI: ETA' , KILOMETRI, SCONTO 20%, sCONTO 40%, PREZZO BIGLIETTO 


// ESECUZIONE: CHIEDERE ALL'UTENTE L'ETA' E I KILOMETRI CHE VUOLE PERCORRERE ATTRAVERSO IL PROMPT 
// CALCOLARE: IL PREZZO DEL BIGLIETTO MOLTIPLICANDO 0.21 PER I KM DATI DALL'UTENTE 
// APPLICARE LO SCONTO IN BASE ALL'ETA' DATA : 
//      SE ETA' MINORE DI 18
//      PRENDI IL PREZZO CALCOLATO DIVIDILO PER 20 E MOLTIPLICALO PER 100,
//          ALTRIMENTI PRENDI IL PREZZO CALCOLATO E DIVIDILO PER 40 E MOLTIPLICALO PER 100
// STAMPARE IL PREZZO FINALE



