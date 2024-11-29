import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};


let balance = 0;
let running = true;

function question() {
console.log("Was möchten Sie tun?");
console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Ende");
}

question();

while (running) {

    let selection = await readLineAsync();

    if (selection == 1) {
        console.log("Geben Sie den Betrag ein, den Sie einzahlen möchten: ")
        let deposit = await readLineAsync();
        balance += deposit; 
        console.log("Sie haben " + deposit + "€ eingezahlt!");
        console.log(" ");
        question();
    }

    if (selection == 2) {
        console.log("Geben Sie den Betrag ein, den Sie abheben möchten: ")
        let withdraw = await readLineAsync();
        balance -= withdraw;  
        console.log("Sie haben " + withdraw + "€ abgehoben!");
        console.log(" ");
        question();
    }

    if (selection == 3) {
        console.log("Ihr Kontostand beträgt "+ balance + "€!");
        console.log(" ");
        question();
    }

    if (selection == 4) {
        console.log(" ");
        console.log("Wird heruntergefahren...");
        running = false;
        readline.close();
    }

    else {
        console.log("Bitte geben Sie eine Zahl zwischen 1 und 4 ein!")
        question();
    }
}