// <>
// Baue folgende Funktionen:

// add(a,b)
function add(a,b) {
    let sum = a + b;
    console.log(sum);
}

add(4,3);

// subtract(a,b)
function subtract(a,b) {
    let diff = a - b;
    console.log(diff);
}

subtract(4,3);

// mulitply(a,b)
function mulitply(a,b) {
    let prod = a * b;
    console.log(prod);
}

mulitply(4,3);

// supercalculation(a,b) -> Formel: (a+b)/2 * a
function supercalculation(a,b) {
    let result = ( a + b ) / 2 * a;
    console.log(result);
}

supercalculation(4,3);

// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.

function printEasterDate(year) {
    n = year - 1900
    a = n % 19
    b = ((7 * a + 1) / 19)
    m = (11 * a + 4 - b) % 29
    q = Math.floor (n / 4)
    w = (n + q + 31 - m) % 7
    p = Math.floor (25 - m - w)

    if (p > 0) {
        console.log("Der Ostersonntag ist der " + p + ". April");
    } else {
        console.log("Ostersonntag ist der " + (p + 31) + ". März");
    } 
}

printEasterDate(2007);