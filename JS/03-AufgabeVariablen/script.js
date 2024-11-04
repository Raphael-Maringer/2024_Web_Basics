let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let averageBananaWeight = 0.22;
let averageAppleWeight = 0.34;

bananaAmountPerKilo = 1 / averageBananaWeight;
appleAmountPerKilo = 1 / averageAppleWeight;

pricePerBanana = bananaPricePerKilo / bananaAmountPerKilo;
pricePerApple = applePricePerKilo / appleAmountPerKilo;

console.log(Math.round(bananaAmountPerKilo) + " Bananen wiegen 1kg.");
console.log(Math.round(appleAmountPerKilo) + " Äpfel wiegen 1kg.");

console.log("Eine Banane kostet " + pricePerBanana.toFixed(2) + "€");
console.log("Ein Apfel kostet " + pricePerApple.toFixed(2) + "€");

console.log("8 Äpfel kosten " + (pricePerApple * 8).toFixed(2) + "€");
console.log("17 Bananen kosten " + (pricePerBanana * 17).toFixed(2) + "€"); 
console.log("1 Tonne Äpfel kosten " + applePricePerKilo * 1000 + "€");
console.log("1 Tonne Bananen kosten " + bananaPricePerKilo * 1000 + "€");