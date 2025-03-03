// var: function scoped
if (true) {
    var varVariable = "This is true"
}

var varVariable = "This is false"   // var kann überschrieben werden

console.log(varVariable)

// const & let: block scoped (nur im nächsten Block)
if (true) {
    let letVariable = "This is true"
}

let letVariable = "This is true" 
let letVariable = "This is false"

console.log(letVariable);

// var-Variablen können abgerufen werden, bevor sie erstellt wird (undefined)

console.log(varvarVariable)
var varvarVariable = "Hello"
console.log(varvarVariable)

// bei let geht das nicht, es kommt eine Fehlermeldung
console.log(letletVariable)
let letletVariable = "Hello"
console.log(letletVariable)

// der Wert von const kann nicht abgeändert werden
const constVar = 1
let letVar = 1

constVar = 2
letVar = 2

// const: "Neuuweisung" funktioniert (reassigning)
const person = {name: "Eric"}
person.name = "Johnny"