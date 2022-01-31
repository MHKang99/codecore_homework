// making a line
function drawLine(num) {
    let stringLine = ""
    for (let i = 0; i < num; i++) {
        stringLine += "━"
        
    }
    console.log(stringLine)
}


// drawLine(parseInt(process.argv[2])) ^ for this function


// top border with ┏ ┓
function drawTop(num) {
    let stringLine = ""
    for (let i = 0; i < num; i++) {
        stringLine += "━"
        
    }
    topBorder = "┏" + stringLine + "┓"

    
    console.log(topBorder)
}


// drawTop(parseInt(process.argv[2])) ^ for this function

// middle border with ┣ ┫

function drawMid(num) {
    let stringLine = ""
    for (let i = 0; i < num; i++) {
        stringLine += "━"
        
    }
    midBorder = "┣" + stringLine + "┫"

    
    console.log(midBorder)
}


// drawMid(parseInt(process.argv[2])) ^for this function

// bottom border with ┗ ┛

function drawBot(num) {
    let stringLine = ""
    for (let i = 0; i < num; i++) {
        stringLine += "━"
        
    }
    botBorder = "┗" + stringLine + "┛"

    
    console.log(botBorder)
}


// drawBot(parseInt(process.argv[2])) ^for this function

// draw bars around with ┃ ┃

function drawBarsAround(string) {
        let stringBars = "┃" + string + "┃"
        console.log(stringBars)
}

// drawBarsAround(process.argv[2]) ^for this function

// 
// botIt function 
//boxIt(['Jon Snow', 'Cersei Lannister']) // returns...
// '┏━━━━━━━━━━━━━━━━┓\n┃Jon Snow       ┃\n┣━━━━━━━━━━━━━━━━┫\n┃Cersei Lannister┃\n┗━━━━━━━━━━━━━━━━┛' 

function boxIt(arr) {
        
        let finalArr = []
        let numLetter = []
    for (let i = 0; i < arr.length; i++) {
        numLetter.push((arr[i].length))
        
    }
     let maxLetters = Math.max(...numLetter)
    //  maxLetters = the biggest word as a number value
    // the below for loop is for getting the name with borders on either side
    for (let i = 0; i < arr.length; i++) {
        let namesWithSpaces = (arr[i]).toString()
        if (arr[i].length !== maxLetters) {
            let numOfSpaces =  maxLetters % arr[i].length;// gets the number of spaces needed to be added
            for (let j = 0; j < numOfSpaces; j++) {
                namesWithSpaces += " " // this for loop puts in the spaces needed to fill
            }
        }
        let stringBars = "┃" + namesWithSpaces + "┃\n";

        finalArr.push(stringBars)

        //console.log(stringBars)
        // will out put arr[i] with bars on each side ┃ ┃
    }

    // top border using maxLetters's value
    let stringLine = "" // stringLine is used for making all the borders
    for (let i = 0; i < maxLetters; i++) {
        stringLine += "━"
        
    }
    topBorder = "┏" + stringLine + "┓\n"
    // console.log(topBorder) //will out put the top border
    midBorder = "┣" + stringLine + "┫\n"
    // console.log(midBorder) //will out put middle border
    botBorder = "┗" + stringLine + "┛"
    // console.log(botBorder) //will output bottom border

    // this is for getting everything together
    let finalBox = `${topBorder}`
    for (let i = 0; i < finalArr.length; i++) {
        if (i != ((finalArr.length)-1)) {
            finalBox += ((finalArr[i].toString()) + midBorder)
        } else if (i = (finalArr.length)-1) {
            finalBox += ((finalArr[i].toString()) + botBorder)
        } 
        
    }
    // console.log(finalArr)
    console.log(finalBox)
}

boxIt(["niki", "merry", "binondo"])

// boxIt(process.argv[2],process.argv[3],process.argv[4])
