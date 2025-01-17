function generate() {
    let number1 = document.getElementById('field1').value
    let number2 = document.getElementById('field2').value
    console.log(number1 + "-" + number2);
    console.log("clicked");
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
}