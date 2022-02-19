const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


fs.readFile(`./${process.argv[2]}`, (err, data) => { // can use ./${process.argv[2]} to get the json file since its in the same directory
    if (err) throw err;
    const jsonObj = (JSON.parse(data));
    

    parsedFile(jsonObj)
  });

function parsedFile (jsonObj) {
    console.log(jsonObj[0].completed)
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].completed === true) {
            list.push(`[✓] ${jsonObj[i].title}`)
        } else {
            list.push(`[ ] ${jsonObj[i].title}`)
        }
        
    }
  }






// must make with functions



let list = []
let toDoCLI = function () {
    console.log("\nWelcome to Todo CLI!\n\n-------------------\n")
    view();
    
    function view() {
        rl.question("(v) View | (n) New | (cX) Complete | (dX) Delete | (s) Save | (q) Quit\n",(answer)=> {
            if (answer === 'v') {
                if (list.length === 0) {
                    console.log("List is empty...");
                    greeting = 1;
                    view(); 
                }else {
                    console.log("\n")
                    for (let i = 0; i < list.length; i++) {
                        console.log(i + " " + list[i])
                    }
                    console.log("\n")
                    greeting = 1;
                    view();
                }
            } else if (answer === 'n') {
                newListItem();
            } else if (answer[0] === 'c' && answer.length > 1) {
                complete(answer);
            } else if (answer[0] === 'd' && answer.length > 1) {
                remove(answer);
            } else if (answer === 'q') {
                quit();
            }else {
                console.log("not a valid option")
                greeting = 1;
                view();
                        }
        })
    }

    function quit () {
        console.log("See you soon!")
        greeting = 0;
        rl.close();
    }


    function remove (answer) {
        let indexNum = "";
        for (let i = 1; i < answer.length; i++) {
            indexNum += answer[i]
        }
        console.log(`Deleted "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`);
        list.splice(parseInt(indexNum),1);
        greeting = 1;
        view();
    }

    function complete(answer) {
        let indexNum = "";
        for (let i = 1; i < answer.length; i++) {
            indexNum += answer[i]
        }
        list.splice(parseInt(indexNum),1,list[parseInt(indexNum)].slice(0,1) + "✓" + list[parseInt(indexNum)].slice(2,list[parseInt(indexNum)].length));
        console.log(`Completed "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`)
        greeting = 1;
        view();
    }

    function newListItem () {
        rl.question("What?\n", (answer)=> {
            list.push(`[ ] ${answer}`);
            greeting = 1;
            view();
        })
    }
}

// let greeting = 0;
// let toDoCLI = function () {
//     if (greeting === 0) {
//         console.log("\nWelcome to Todo CLI!\n\n-------------------\n")
//     }
//     rl.question("(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit\n", (answer) =>{
        
//         if (answer === "v") {
//             if (list.length === 0) {
//                 console.log("List is empty...")
//                 greeting = 1;
//                 toDoCLI();
//             } else {
//                 console.log("\n")
//                 for (let i = 0; i < list.length; i++) {
//                     console.log(i + " " + list[i])
//                 }
//                 console.log("\n")
//                 greeting = 1;
//                 toDoCLI();
//             }
//         } else if (answer === "n") {
//             rl.question("What?\n", (answer)=> {
//                 list.push(`[ ] ${answer}`)
//                 greeting = 1;
//                 toDoCLI();
//             });
            
//         } else if (answer[0] === "c") {
//             let indexNum = "";
//             for (let i = 1; i < answer.length; i++) {
//                 indexNum += answer[i]
//             }
//             list.splice(parseInt(indexNum),1,list[parseInt(indexNum)].slice(0,1) + "✓" +list[parseInt(indexNum)].slice(2,list[parseInt(indexNum)].length));
//             console.log(`Completed "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`)
//             greeting = 1;
//             toDoCLI();
//         }else if (answer[0] === "d") {
//             let indexNum = "";
//             for (let i = 1; i < answer.length; i++) {
//                 indexNum += answer[i]
//             }
//             console.log(`Deleted "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`);
//             list.splice(parseInt(indexNum),1);
//             greeting = 1;
//             toDoCLI();
//         } else if (answer === "q") {
//             console.log("See you soon!")
//             greeting = 0;
//             rl.close();
//         } else {
//             console.log("not a valid option")
//             greeting = 1;
//             toDoCLI();
//         }
//     })
// }


toDoCLI()