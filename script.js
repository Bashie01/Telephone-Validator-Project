let convertBtn = document.getElementById("convert-btn");
let number = document.getElementById("number");
let output = document.getElementById("output");

//Lists all of the roman numerals within an array
const romans = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
//lists all arabic numbers in an array the order of both arrays is important for this to match correctly
const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//converts a string to a number
function convertToRoman() {
  let userInput = Number(number.value);
  output.innerText = "";

  if (number.value === "") {
    //If the input is blank then "Please enter a valid number"
    output.innerText = "Please enter a valid number";
    return;
  } else if (number.value <= 0) {
    //if the input is 0 or less than 0 then "Please enter a number greater than or equal to 1"
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (number.value > 3999) {
    //The converter does not accept more than 3999 as the maximum input
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  for (let i = 0; i < romans.length; i++) {
    //simple for loop for defined arrays
    while (userInput >= numerals[i]) {
      //if the input number is 300 then it would look through the array: 100 in roman numerals is C so it would return CCC == 300
      output.innerText += romans[i];
      userInput -= numerals[i];
    }
  }
}

convertBtn.addEventListener("click", convertToRoman);
