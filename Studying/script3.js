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

