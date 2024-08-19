#! /usr/bin/env node

//npm install inquirer@9.2.10

//npm install @types/inquirer@9.0.3 -D

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner" ;


(async ( ) =>{ 
  await showBanner ( 'C u r r e n c y  converter','','blue');

const currency: any = {
  USD: 1, //base currency
  EUR: 1.07,
  GBP: 0.76,
  PKR: 280,
  INR: 75,
};

let input = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "PKR", "INR"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "PKR", "INR"],
  },
  {
    name: "amount",
    message: "Enter amount",
    type: "number",
  },
]);

let fromAmount = currency[input.from]; //user k pass jo currency h

let toAmount = currency[input.to]; //user ko jo currency chaiya

let amount = input.amount; //user ne jo  amount enter ki us ko store krne  k lea

console.log(fromAmount);
console.log(toAmount);
console.log(amount);

let baseAmount = amount / fromAmount; //base amount  may convert krne k lea
let convertedAmount = baseAmount * toAmount;

console.log(chalk.greenBright.italic("your amount in usd"), baseAmount);

console.log(chalk.bold.blueBright("you will get"), convertedAmount);

})();



