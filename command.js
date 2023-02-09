
const prompt = require('prompt-sync')();


let command = ("");
let input = ("");
let names = [];
let food = [];

//If the command is not QUIT, the rest below can happen
while (command != "QUIT") {
input = prompt ("Why are you bothering me?")

command = input.toUpperCase();

// if the command from the user is ADD, console will say why is name.
if (command == 'ADD'){

// This will then push the name to the console.
input = prompt ("Why is name?")
    names.push (input)
    console.log (names)

}
// If they put in food, console will say hmmm hungry.
if (command == 'FOOD'){

    input = prompt ("Hmmmm Hungry")
    // this will push what has been inputted to a list that shows in console.
    food.push (input)
    console.log (food)
}
}
