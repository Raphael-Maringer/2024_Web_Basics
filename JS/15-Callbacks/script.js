// Aufgabe 1
// Erstelle eine Funktion Decider. Decider erwartet 2 Argumente - eine Zahl und eine Callback-Funktion.
// Wenn die Zahl > 100 ist, dann rufe die Callbackfunktion auf. Ansonsten nicht.

function decider(number, callback) {
    if (number > 150) {
        callback(number);
    } else {
        console.log(`The number ${number} is smaller than 150.`);
    }
}

function isBigger(number) {
    console.log(`The number ${number} is bigger than 150`);
}

decider(151, isBigger);

// Aufgabe 2
// Die Funktion orderPizza nimmt den Namen der Pizza und einen Callback entgegen. Sie simuliert das Bestellen der Pizza.
// Wenn die Pizza fertig ist wird der Callback aufgerufen. Dem Callback wird ein zufälliger Preis mitgegeben.

function orderPizza(pizzaname, callback) {
    console.log(`Your ${pizzaname} was ordered. `);
    let randomPrice = Math.random() * 10 + 10;
    callback(randomPrice);
}

function pizzaready(price) {
    console.log(`Your Pizza is ready! It costs ${price}€!`);
}

orderPizza("Margherita", pizzaready); 