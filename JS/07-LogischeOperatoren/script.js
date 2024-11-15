// <>

let randomNumber1 = Math.random() * 100;
let randomNumber2 = Math.random() * 100;
let random1 = Math.floor(randomNumber1);
let random2 = Math.floor(randomNumber2);

console.log(random1, random2);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
console.log("Aufgabe 1:");

if (random1 < random2 && random1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
} else console.log("/");

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
console.log("Aufgabe 2: ");

if (random1 < 30 || random2 < 30) {
    console.log("Eine der beiden Zahlen ist kleiner als 30.");
} else console.log("/");

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
console.log("Aufgabe 3: ");

if (random1 < 50 && random2 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger.");
} else console.log("/");
