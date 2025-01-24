// Zähle alle ungeraden Zahlen zw. 7 (inkl.) und 344 (exkl.) zusammen. Jene Zahlen, die durch 7 teilbar sind, müssen doppelt gezählt werden.

let sum = 0;

for (let index = 7; index < 344; index++) {
    if (index % 2 != 0) {
        if (index % 7 == 0) {
            sum += 2 * index;
        }
        else {
            sum += index;
        }
    }
}
console.log(sum);


// Gegeben ist let data = "Super Duper".split(""); Gehe alle Buchstaben einzeln durch. Lösche alle "u" und "e" aus dem String und gib ihn am Ende wieder aus.

let data = "Super Duper".split("");
let string = "";

for (let index = 0; index < data.length; index++) {
    if (data [index] != "u" && data[index] != "e") {
        string += data[index];
    }
}

console.log(string);

// Gib die Zahlen 100, 95, 90, etc. aus. Die letzte Zahl ist 25. Die Zahlen 50, 40 und 30 lässt du aus. Löse die Aufgabe mit einem while-loop.

let num = 100;

while (num > 25) {
    if (num != 50 && num != 40 && num != 30) {
        console.log(num)
    }
    num -= 5;
}
