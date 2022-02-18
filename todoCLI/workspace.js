// const fs = require("fs");
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question("press cX where x is a number", (answer) => {
//     console.log(typeof answer[1])

//     // if (typeof answer[1] == "number") {
//     //     console.log('good job it works')
//     // } else console.log("doesnt work");
// })
 
let list = [
    "[✓] Take out the trash",
    "[✓] Buy toothpaste",
    "[ ] Buy Snickerdoodles",
    "[ ] Fix the climate",
    "[ ] Find a cure for aging",]

console.log(list[3].slice(0,1) + "✓" +list[3].slice(2,list[3].length))
let answer = "c90";
let indexNum = "";
for (let i = 1; i < answer.length; i++) {
    indexNum += answer[i]
}
console.log(typeof indexNum)