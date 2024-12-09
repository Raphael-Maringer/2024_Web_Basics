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
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// printField();
field[0][1] = 1;
field[1][1] = 2;


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

function checkWinner() {
  for (let row = 0; row < 3; row++) {
    if (field[row][0] != 0 && field[row][0] == field[row][1] && field[row][1] == field[row][2]) {
      return field[row][0];
    }
  }

  for (let col = 0; col < 3; col++) {
    if (field[0][col] != 0 && field[0][col] == field[1][col] && field[1][col] == field[2][col]) {
      return field[0][col];
    }
  }

  if (field[0][0] != 0 && field[0][0] == field[1][1] && field[1][1] == field[2][2]) {
    return field[0][0];
  }

  if (field[0][2] != 0 && field[0][2] == field[1][1] && field[1][1] == field[2][0]) {
    return field[0][2];
  }

  return 0;
}

printField();