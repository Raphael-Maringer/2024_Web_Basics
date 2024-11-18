// Erstelle ein Array mit folgenden Werten: 4,1,2,3
// Füge die Werte 17 und 199 dazu
//	    a. Gib alle Werte in einer Schleife aus!
//		b. Zähle alle Werte zusammen und gib das Ergebnis aus
//      c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus

console.log("Aufgabe 1: ");
let values = [4, 1, 2, 3];
values.push(17, 199);

console.log("a): ");
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

console.log("b): ");
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum);

console.log("c): ");
let avg = sum / values.length;
console.log(avg);


console.log("Aufgabe 2: ");

// Erstelle ein Array mit folgenden Strings: "Susi", "Paula", "Hans"
// Gib folgenden Satz aus: "Meine Freunde sind Susi, Paula und Hans
// Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten: "Meine Freunde sind Susi, Paula, Hans und Sepp"

let names = ["Susi", "Paula", "Hans"];
let sentencestart = "Meine Freunde sind";

function getNamesList(names, sentencestart) {
    for(let i = 0; i < names.length; i++) {
        if (i == names.length - 1) {
            sentencestart += " und " + names[i] + "."; 
            console.log(sentencestart);
        } else {
            sentencestart += " " + names[i] + ",";
        }
    }
}
getNamesList(names, sentencestart); 

names.push("Sepp");

let newsentencestart = "Meine Freunde sind";
getNamesList(names, newsentencestart); 