#! /usr/bin/env node
import inquirer from 'inquirer';
// todos array
// function
// operation
let todos = [];
let todoQuestions = await inquirer.prompt([
    {
        name: "firstQuestion",
        type: "input",
        message: "What do you like to add in your todos? ",
    },
    {
        name: "secondQuestion",
        type: "confirm",
        message: "Do you like to add more in you todos",
        default: "true",
    }
]);
console.log(todoQuestions);
