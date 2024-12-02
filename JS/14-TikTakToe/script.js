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


let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

// printField();
field[0] [1] = 1;
field[1] [1] = 2;

function printField() {
    for (let row = 0; row < field.length; row++) {
        let actualRow = field[row];
        let output = "";
        for (let index = 0; index < actualRow.length; index++) {
            let sign = " ";
            if (actualRow[index] == 1) {
                sign = "X";
            } else if (actualRow[index] == 2) {
                sign = "0";
            } 

            output += sign + " | ";
        }
        console.log(output);    
    }
}

printField();