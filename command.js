const prompt = require('prompt-sync')();


let command = ("");
let input = ("");
let names = [];
let food = [];


while (command != "QUIT") {
input = prompt ("Why are you bothering me?")

command = input.toUpperCase();


if (command == 'ADD'){

input = prompt ("Why is name?")
    names.push (input)
    console.log (names)

}
if (command == 'FOOD'){

    input = prompt ("Hmmmm Hungry")
    food.push (input)
    console.log (food)
}
}
