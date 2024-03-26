#! /usr/bin/env node
import inquirer from "inquirer";
// sarwat haroon ...

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNum" },
  { message: "Enter your seceond number", type: "number", name: "secondNum" },
  {
    message: "Select one of the operators to perfome operation:",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operators === "Addition") {
  console.log(answer.firstNum + answer.secondNum);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNum - answer.secondNum);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNum * answer.secondNum);
} else if (answer.operators === "Division") {
  console.log(answer.firstNum / answer.secondNum);
} else {
  console.log("Please select a valid operator!");
}






