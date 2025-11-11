// slider min/max
const minSlider = document.getElementById("minSlider");
const maxSlider = document.getElementById("maxSlider");
// inputs min/max
let minInput = document.getElementById("minInput");
let maxInput = document.getElementById("maxInput");
// numero da indovinare
const numberPosition = document.getElementById("numberPosition");
// numero dello user
const myInput = document.getElementById("myInput");
// container dove mettere gli indizi
const inputContainer = document.getElementsByTagName("inputContainer");
const hintTitle = document.getElementById("hintTitle");
const hintMessage = document.getElementById("hintMessage");
// numeri da rollare iniziali
minRoll = 1;
maxRoll = 10;

// randomizza il numero iniziale
let rightNumber;
randomize();

// default input dello user
let userNumber = 0;

console.log(hintTitle.innerText);

// Controllo se il numero inserito è uguale a quello da indovinare
function guessNumber() {
  // prendo l'input dello user
  userNumber = myInput.value;

  // log per bugs
  console.log("Guess number clicked");
  console.log(`numero inserito: ${userNumber}`);
  console.log(`numero da indovinare ${rightNumber}`);

  // Se il numero inserito non è uguale al numero da indovinare:
  if (userNumber != rightNumber) {
    //Controllo se il numero inserito sia valido per giocare
    if (userNumber <= 0 || userNumber < minRoll || userNumber > maxRoll) {
      window.alert(`${userNumber} is not a valid number`);
    } else if (isNaN(userNumber)) {
      window.alert(`"${userNumber}" is NOT a number!`);
    }
    // Se non è lo stesso numero, dai degli indizi in base a quanto è distante
    else {
      if (Math.abs(userNumber - rightNumber) >= 25) {
        console.log("è lotano di 20+, oceano");
        insertHint("OCEANO");
      } else if (Math.abs(userNumber - rightNumber) >= 15) {
        console.log("è lotano di 15+, acquazzone");
        insertHint("Acquazzone");
      } else if (Math.abs(userNumber - rightNumber) >= 8) {
        console.log("è lotano di 10+, acqua");
        insertHint("Fuochino");
      } else if (Math.abs(userNumber - rightNumber) >= 4) {
        console.log("è lotano di 5+, fuoco");
        insertHint("Fuoco");
      } else {
        console.log("è lotano di 3, FUOCHINO FUOCHINO");
        insertHint("FUOCONE");
      }
    }
  } else {
    numberPosition.innerText = rightNumber;
    hintTitle.innerText = "";
    hintMessage.innerText = `HAI INDOVINATO!`;
    console.log("hai indovinato");
  }
}

function revealNumber() {
  numberPosition.innerText = rightNumber;
}

function insertHint(indizio) {
  hintTitle.innerText = "Indizio:";
  hintMessage.innerText = `${indizio}`;
}

// randomizza
function randomize() {
  rightNumber = Math.floor(Math.random() * (maxRoll + 1 - minRoll) + minRoll);
  numberPosition.innerText = "?";
  console.log(rightNumber);
  hintTitle.innerText = "";
  hintMessage.innerText = `Numero randomizzato!`;
}

// min numbers functions
function changeMinSlider() {
  let val = minInput.value;
  // cambia valore slider
  minSlider.value = val;

  // max number (min) cambiata
  maxSlider.min = val;

  val = Number(val);
  minRoll = val;
}
function changeMinInput() {
  let val = minSlider.value;
  // cambia valore input
  minInput.value = val;
  // max number (min) cambiata
  maxSlider.min = val;

  val = Number(val);
  minRoll = val;
}

// max numbers functions

function changeMaxSlider() {
  let val = maxInput.value;
  // cambia valore slider
  maxSlider.value = val;
  // min number (max) cambita
  minSlider.max = val;

  val = Number(val);
  maxRoll = val;
}

function changeMaxInput() {
  let val = maxSlider.value;
  // cambia valore input
  maxInput.value = val;
  // min number (max) cambiata
  minSlider.max = val;

  val = Number(val);
  maxRoll = val;
}

// if (userNumber > rightNumber) {
//   window.alert(
//     `Your number "${userNumber}"is too high! (number to guess: ${rightNumber})`
//   );
// } else if (userNumber < rightNumber) {
//   window.alert(
//     `Your number "${userNumber}"is too low! (number to guess: ${rightNumber})`
//   );
// }
// //vittoria!
// else {
//   window.alert(
//     `Your number "${userNumber}"is too... CORRECT! (number to guess: ${rightNumber})`
//   );
// }

