function RandomWord() {
    const words = [
        "abruptly",
        "abyss",
        "affix",
        "askew",
        "avenue",
        "awkward",
        "axiom",
        "azure",
        "bagpipes",
        "bandwagon",
        "banjo",
        "bayou",
        "beekeeper",
        "bikini",
        "blitz",
        "blizzard",
        "boggle",
        "bookworm",
        "boxcar",
        "boxful",
        "buckaroo",
        "buffalo",
        "buffoon",
        "buxom",
        "buzzard",
        "buzzing",
        "buzzwords",
        "caliph",
        "cobweb",
        "cockiness",
        "croquet",
        "crypt",
        "curacao",
        "cycle",
        "daiquiri",
        "dirndl",
        "disavow",
        "dizzying",
        "duplex",
        "dwarves",
        "embezzle",
        "equip",
        "espionage",
        "euboea",
        "exodus",
        "faking",
        "fishhook",
        "fixable",
        "fjord",
        "flapjack",
        "flopping",
        "fluffiness",
        "flyby",
        "foxglove",
        "frazzled",
        "frizzled",
        "fuchsia",
        "funny",
        "gabby",
        "galaxy",
        "galvanize",
        "gazebo",
        "giaour",
        "gizmo",
        "glowworm",
        "glyph",
        "gnarly",
        "gnostic",
        "gossip",
        "grogginess",
        "haiku",
        "haphazard",
        "hyphen",
        "iatrogenic",
        "icebox",
        "injury",
        "ivory",
        "ivy",
        "jackpot",
        "jaundice",
        "jawbreaker",
        "jaywalk",
        "jazziest",
        "jazzy",
        "jelly",
        "jigsaw",
        "jinx",
        "jiujitsu",
        "jockey",
        "jogging",
        "jovial",
        "joking",
        "joyful",
        "juicy",
        "jukebox",
        "jumbo",
        "kayak",
        "kazoo",
        "khaki",
        "keyhole",
        "kilobyte",
        "kiosk",
        "kitsch",
        "kiwifruit",
        "klutz",
        "knapsack",
        "larynx",
        "lengths",
        "lucky",
        "luxury",
        "lymph",
        "marquis",
        "matrix",
        "megahertz",
        "microwave",
        "mnemonic",
        "mystify",
        "naphtha",
        "nightclub",
        "nowadays",
        "numbskull",
        "nymph",
        "onyx",
        "ovary",
        "oxidize",
        "oxygen",
        "pajama",
        "peekaboo",
        "phlegm",
        "pixel",
        "pizazz",
        "pneumonia",
        "polka",
        "pshaw",
        "psyche",
        "puppy",
        "puzzling",
        "quartz",
        "queue",
        "quips",
        "apprize",
        "vixen",
        "vodka",
        "voodoo",
        "vortex",
        "voyeurism",
        "walkway",
        "waltz",
        "wave",
        "wavy",
        "waxy",
        "wellspring",
        "wheezy",
        "whiskey",
        "whizzing",
        "whomever",
        "wimpy",
        "witchcraft",
        "wizard",
        "woozy",
        "wristwatch",
        "wyvern",
        "xylophone",
        "yachtsman",
        "yippee",
        "yoked",
        "youthful",
        "yummy",
        "zephyr",
        "zigzag",
        "zigzagging",
        "zilch",
        "zipper",
        "zodiac",
        "zombie",
        "absurd"
    ];
    let randomNum = Math.floor(Math.random()*176)
    let word = words[parseInt(randomNum)];
    return word
}

let TheWord = RandomWord();
console.log(TheWord);
let wrongGuesses = 0
let arrAnswer = TheWord.toUpperCase().split("");
let Display = "";
let correctClicks = 0
let wrongClicks = 0

var loseSound = new Audio('../sounds/lose.wav');
var winSound = new Audio('../sounds/win.wav');

let disableButtons = document.getElementById("alphabet");

// displaying buttons
function displayAlphabet() {
    const fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let splitLetters = fullAlphabet.toUpperCase().split("");
    let keyboard = splitLetters.map(letter => 
        `
        <button class="btn btn-primary letter" id='`+letter+`' onclick="clickedLetter('`+letter+`')">
        `+letter+`
        </button>
        
        `
        ).join("");

        document.getElementById("alphabet").innerHTML = keyboard;
}


function clickedLetter(clicked) {
    if (arrAnswer.indexOf(clicked) === -1) {
        wrongGuesses += 1
        updatePic()
        checkIfGameLost()
    } else {
        correctGuess(clicked)
        correctClicks += 1
        checkIfGameWon()
    }
    document.getElementById(clicked).setAttribute('disabled', true);

}
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function correctGuess(letter) {
    for (let i = 0; i < arrAnswer.length; i++) {
        if (arrAnswer[i] == letter) {
            Display = Display.replaceAt(i*2,letter)
            
        }
    }
    console.log(arrAnswer.indexOf(letter))
    document.getElementById("TheWord").innerHTML = Display
    indexOfLetter = [];
}

function updatePic() {
    document.getElementById('hangmanPic').src = './images/' + 'hangman' +wrongGuesses+ '.png';
}

function displayWord() {
    for (let i = 0; i < arrAnswer.length; i++) {
        Display += "_ "
    }
    document.getElementById("TheWord").innerHTML = Display
}

displayWord()
displayAlphabet()
let allButtons = document.querySelectorAll("button.letter")
function checkIfGameLost() {
    if (wrongGuesses === 6) {
        alert("better luck next time");
        disableAllButtons()
        loseSound.play();
    }
}
function checkIfGameWon() {
    if (Display.indexOf("_") === -1) {
        alert("Congratz you have won")
        disableAllButtons()
        winSound.play();
    }
}

function reset() {
    TheWord = RandomWord();
    wrongGuesses = 0;
    arrAnswer = TheWord.toUpperCase().split("");
    displayAlphabet();
    correctClicks = 0;
    wrongClicks = 0;
    Display = "";
    displayWord();
    updatePic()
    allButtons = document.querySelectorAll("button.letter")
}




function disableAllButtons() {
    allButtons.forEach(element => {
        element.setAttribute("disabled", true)
    });
}
