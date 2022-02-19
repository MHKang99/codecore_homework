const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//---------------- first stretch -----------------
fs.readFile(`./${process.argv[2]}`, (err, data) => {
    if (err) throw err;
    const jsonObj = (JSON.parse(data)); // to parse the json file so it will be a JS object
    

    parsedFile(jsonObj) // calling the function to add object into list since it runs after the page has been read
  });

function parsedFile (jsonObj) { //function that adds the json file content to the list. has to run inside fs.readfile
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].completed === true) {
            list.push(`[✓] ${jsonObj[i].title}`)
        } else {
            list.push(`[ ] ${jsonObj[i].title}`)
        }
        
    }
  }






// --------------made with functions---------------

let list = []; // storage for added list items 
// removed the greeting value since using functions won't need it
let toDoCLI = function () {
    console.log("\nWelcome to Todo CLI!\n\n-------------------\n") // displays only when starting the file
    view();

    // view function that calls all the other functions depending on what the answer to the rl.question is
    function view() { 
        rl.question("(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit\n",(answer)=> {
            if (answer === 'v') {
                if (list.length === 0) {
                    console.log("List is empty...");
        
                    view(); 
                }else {
                    console.log("\n")
                    for (let i = 0; i < list.length; i++) {
                        console.log(i + " " + list[i])
                    }
                    console.log("\n")
        
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
                view();
            }
        })
    }

    function quit () {
        console.log("See you soon!")
        rl.close();
    }

    function remove (answer) {
        let indexNum = "";
        for (let i = 1; i < answer.length; i++) {
            indexNum += answer[i]
        }
        console.log(`Deleted "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`);
        list.splice(parseInt(indexNum),1);
        view();
    }

    function complete(answer) {
        let indexNum = "";
        for (let i = 1; i < answer.length; i++) {
            indexNum += answer[i]
        }
        list.splice(parseInt(indexNum),1,list[parseInt(indexNum)].slice(0,1) + "✓" + list[parseInt(indexNum)].slice(2,list[parseInt(indexNum)].length));
        console.log(`Completed "${list[parseInt(indexNum)].slice(4,list[parseInt(indexNum)].length)}"`)
        view();
    }

    function newListItem () {
        rl.question("What?\n", (answer)=> {
            list.push(`[ ] ${answer}`);
            view();
        })
    }
}

toDoCLI()



// --------- made with if statements but not functions -----------------

// let list = []
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


// toDoCLI()