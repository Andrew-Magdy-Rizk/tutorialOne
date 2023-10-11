// Writing Letters
let letters = "ابتثجحخدذرزسشصضطظعغفقكلمنهويةئ";
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
  اكلة: [
    "برجر",
    "ام علي",
    "طعمية",
    "خبيزه",
    "مكرونه بشاميل",
    "كوسه بشاميل",
    "مسقعه",
    "كفته",
    "كوارع",
    "شكشوكه",
    "باميه",
    "كوسه",
  ],
  بلاد: [
    "مصر",
    "امريكا",
    "سودان",
    "اليابان",
    "السعودية",
    "استراليا",
    "الصين",
    "الارجنتين",
    "بلجيكا",
    "البرازيل",
    "كندا",
    "جزر القمر",
  ],
  ممثلين: [
    "خالد النبوي",
    "يوسف الشريف",
    "هانى رمزي",
    "رامز جلال",
    "محمد رمضان",
    "احمد السقه",
    "عبدالحليم",
  ],
  افلام: [
    "اكس لارج",
    "ابى فوق الشجرة",
    "واحد تاني",
    "بحبك",
    "الجزيرة",
    "غش الزوجية",
    "الحرامي و العبيط",
    "هي فوضي",
    "كلاشنكوف",
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
      if (wordletter === " ") {
        thesucss++;
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
    // Chake the All Box Guess
    allGuess.forEach((e) => {
      if (e.innerHTML !== "") {
        thesucss++;
      }
    });
    console.log(thesucss);
    // Get if you Finished
    if (thesucss === arrayletters.length) {
      eleLetters.classList.add("finished");
      successGame();
    }
  }
});

// Create Pop Up When lose
function endGame() {
  let thepop = document.createElement("div");
  let textpop = document.createTextNode(`لقد خسرت الكلمة هى (${randomValue})`);
  let btnTry = document.createElement("a");
  let textBtn = document.createTextNode("Try Agine");
  btnTry.appendChild(textBtn);
  thepop.className = "end-game";
  thepop.appendChild(textpop);
  thepop.appendChild(btnTry);
  document.body.querySelector(".contianer").appendChild(thepop);
  btnTry.href = "";
}

// Create Pop Up When Win
function successGame() {
  let thepop = document.createElement("div");
  let textpop = document.createTextNode(`لقد ربحت الكلمة هى (${randomValue})`);
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
