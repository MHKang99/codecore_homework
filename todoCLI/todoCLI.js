const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// must make with functions

let list = []
let greeting = 0;
let toDoCLI = function () {
    if (greeting === 0) {
        console.log("\nWelcome to Todo CLI!\n\n-------------------\n")
    }
    rl.question("(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit\n", (answer) =>{
        
        if (answer === "v") {
            if (list.length === 0) {
                console.log("List is empty...")
                greeting = 1;
                toDoCLI();
            } else {
                console.log("\n")
                for (let i = 0; i < list.length; i++) {
                    console.log(i + " " + list[i])
                }
                console.log("\n")
                greeting = 1;
                toDoCLI();
            }
        } else if (answer === "n") {
            rl.question("What?\n", (answer)=> {
                list.push(`[ ] ${answer}`)
                greeting = 1;
                toDoCLI();
            });
            
        } else if (answer[0] === "c") {
            let indexNum = "";
            for (let i = 1; i < answer.length; i++) {
                indexNum += answer[i]
            }
            list.splice(parseInt(indexNum),1,list[parseInt(indexNum)].slice(0,1) + "✓" +list[parseInt(indexNum)].slice(2,list[parseInt(indexNum)].length));
            console.log(`Completed "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`)
            greeting = 1;
            toDoCLI();
        }else if (answer[0] === "d") {
            let indexNum = "";
            for (let i = 1; i < answer.length; i++) {
                indexNum += answer[i]
            }
            console.log(`Deleted "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`);
            list.splice(parseInt(indexNum),1);
            greeting = 1;
            toDoCLI();
        } else if (answer === "q") {
            console.log("See you soon!")
            greeting = 0;
            rl.close();
        } else {
            console.log("not a valid option")
            greeting = 1;
            toDoCLI();
        }
    })
}


toDoCLI()