import inquirer from "inquirer";

// user input:
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number: ",
    },
    {
        name: "num2", 
        type: "number",
        message: "Enter Second Number: ",
    },
    {
        name: "operators",
        type: "list",
        message: "Please Select the Operator: ",
        choices:[ "+","-","*","/" ]
    }]);

// variable declaration:
let number1: number = answers.num1;
let number2: number = answers.num2;
let opt: string = answers.operators; 
let message2 = "Solution:";

// condition statements:
if (opt == "+"){
    console.log(`${message2} ${number1} ${opt} ${number2} = ${number1+number2}`)
}
else if (opt == "-"){
    console.log(`${message2} ${number1} ${opt} ${number2} = ${number1-number2}`)
}
else if (opt == "*"){
    console.log(`${message2} ${number1} ${opt} ${number2} = ${number1*number2}`)
}
else if (opt == "/"){
    console.log(`${message2} ${number1} ${opt} ${number2} = ${number1/number2}`)
}