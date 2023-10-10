// Writing Letters
let letters = "abcdefghijklmnopqrstuvwxyz";
// Get Element Letters
let eleLetters = document.querySelector(".letters");
// Create Array From Letters
let arrLetters = Array.from(letters);

arrLetters.forEach((e) => {
  let mydiv = document.createElement("span");

  let mynode = document.createTextNode(e);

  mydiv.className = "box-letter";

  mydiv.appendChild(mynode);

  eleLetters.appendChild(mydiv);
});

//create object to words secret
const words = {
  programming: ["php", "javascript", "java", "python", "mysql", "sql"],
  countries: [
    "egypt",
    "yemen",
    "qatar",
    "Algeria",
    "Australia",
    "Canada",
    "China",
  ],
  famous: [
    "Hassan Hosni",
    "Hassan Mustafa",
    "Hassan Youssef",
    "Hussein Ismail",
    "Ahmed Badir",
  ],
  movies: [
    "The Gray man",
    "Oppenheimer",
    "John Wick",
    "Spider Man",
    "Fast and Furious",
  ],
};

// get all key
let allkey = Object.keys(words);

//get Randon Number From Quntity key
let randomKey = Math.floor(Math.random() * allkey.length);

// Get name the key From The Random Number
let keyprop = allkey[randomKey];

// Get into the rondom Key
let keyValue = words[keyprop];

// Get Random Number From into key
let randonvaluenum = Math.floor(Math.random() * keyValue.length);

// Get Random value from the Random Number
let randomValue = keyValue[randonvaluenum];

// Set the category name
document.querySelector("header .category span").innerHTML = keyprop;

// Get the contianer Letters
let myLettersGuess = document.querySelector(".letters-guess");

// Create Array letters From value
let arrayletters = Array.from(randomValue);

// The wrong Number
let wrongNumber = 0;

// Select the main drow
let theDrow = document.querySelector(".hangman-draw");

// Create Span Becouse Guess-letter
arrayletters.forEach((e) => {
  let empSpan = document.createElement("span");

  if (e === " ") {
    empSpan.className = "empty";
  }

  myLettersGuess.appendChild(empSpan);
});

// Get All the Guess letter
let allGuess = document.querySelectorAll(".letters-guess span");

// Add Event for the letter-box display none
document.addEventListener("click", (e) => {
  // The status
  let theStatus = false;
  // the right guess Number
  let thesucss = 0;

  //condation for create only clicked on the letters-box
  if (e.target.className === "box-letter") {
    e.target.classList.add("clicked");

    let letterClick = e.target.innerHTML.toLowerCase();

    arrayletters.forEach((wordletter, index) => {
      if (letterClick === wordletter.toLowerCase()) {
        //if connect status changed
        theStatus = true;
        let empBox = document.querySelectorAll(".letters-guess span");
        empBox[index].innerHTML = letterClick;
      }
    });
    if (theStatus !== true) {
      wrongNumber++;
      theDrow.classList.add(`wrong-${wrongNumber}`);
      document.getElementById("field").play();
    } else {
      document.getElementById("success").play();
    }
    if (wrongNumber === 8) {
      eleLetters.classList.add("finished");
      endGame();
    }
    allGuess.forEach((e) => {
      if (e.innerHTML !== "") {
        thesucss++;
      }
    });
    if (thesucss === arrayletters.length) {
      eleLetters.classList.add("finished");
      successGame();
    }
  }
});

function endGame() {
  let thepop = document.createElement("div");
  let textpop = document.createTextNode(
    `Game Over, the word is ${randomValue}`
  );
  let btnTry = document.createElement("a");
  let textBtn = document.createTextNode("Try Agine");
  btnTry.appendChild(textBtn);
  thepop.className = "end-game";
  thepop.appendChild(textpop);
  thepop.appendChild(btnTry);
  document.body.querySelector(".contianer").appendChild(thepop);
  btnTry.href = "";
}

function successGame() {
  let thepop = document.createElement("div");
  let textpop = document.createTextNode(
    `Game Success, the word is ${randomValue}`
  );
  let btnTry = document.createElement("a");
  let textBtn = document.createTextNode("Try Agine");
  btnTry.appendChild(textBtn);
  thepop.className = "end-game";
  thepop.appendChild(textpop);
  thepop.appendChild(btnTry);
  document.body.querySelector(".contianer").appendChild(thepop);
  btnTry.href = "";
}
console.log(arrayletters);
