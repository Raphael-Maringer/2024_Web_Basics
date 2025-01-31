// Aufgabe 1
let result = 0;

for (let i = 7; i < 344; i++) {
    if (i%2 == 0) {
        if (i%12 ==0) {
            result += i * 3;
        } else {
            result += i;
        }
    }
}
console.log(result);


// Aufgabe 2
let data = "Super Data".split("");
let output = "";

for (let i = 0; i < data.length; i++) {
    if (data[i] == "u" || data[i]== "e"){
        output += "x";
    } else {
        output += data[i];
    }
}

console.log(output);


// Aufgabe 3
let num= 100;

while (num >= 25) {
    if (num !== 50 && num !== 40 && num !== 30) {
        console.log(num);
    }
    num -= 5;
}
