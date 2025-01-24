// Summiere alle geraden Zahlen zwischen 10 (inklusive) und 200 (exklusive). Zahlen, die durch 10 teilbar sind, sollen nicht mitgezählt werden.

let sum = 0;

for (let i = 10; i < 200; i++) {
    if (i != 10) {
        sum += i;
    }
}

console.log(sum);


// Gegeben ist ein String let text = "Hallo Welt, wie geht es dir?". Ersetze im Text jedes "e" durch "3" und "i" durch "1". Gib den neuen Text aus.

let text = "Hallo Welt, wie geht es dir?";
let string = "";

for (let i = 0; i < text.length; i++) {
    if (text [i] == "e") {
        string += "3";
    }
    else if (text [i] == "i") {
        string += "1";
    }
    else {
        string += text [i];
    }
}

console.log(string);


// Überprüfe einen String und zähle alle Vokale darin.

let message = "Kathi du Deppate!";
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < message.length; i++) {
    if (vowels.includes(message[i])) {
        count += 1;
    }
}

console.log(count);
