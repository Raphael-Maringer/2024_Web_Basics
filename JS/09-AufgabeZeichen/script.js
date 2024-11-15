// 1. Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
// X X X X 
// O O O O 
// X X X X 
// O O O O 
console.log("Aufgabe 1: ");

for (var i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("X X X X");
    }
    if (i % 2 == 1) {
        console.log("O O O O");
    }
}

console.log("--------------------------------");

// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
// (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 
console.log("Aufgabe 2: ")
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log("Summe:" + sum);

console.log("--------------------------------");

// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben

for (let index = 0; index < 5; index++) {
    if (index == 0) {
        console.log("XXXX")
    }
    if (index == 1) {
        console.log("X  X")
    }
    if (index == 2) {
        console.log("XXXX")
    }
    if (index == 3) {
        console.log("X X")
    }
    if (index == 4) {
        console.log("X  X")
    }
}