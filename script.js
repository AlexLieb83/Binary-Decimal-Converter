//To Do
//add buttons to click and an input box for the number, hitting one btn will run binarytodec the other will run dectobinary
//follow the user stories and constraints
const numberInput = document.getElementById("numberInput");
const bin2DecBtn = document.getElementById("bin2Dec");
const dec2BinBtn = document.getElementById("dec2Bin");
const results = document.getElementById("results");

bin2DecBtn.addEventListener("click", () => {
  if (
    numberInput.value.includes(2) ||
    numberInput.value.includes(3) ||
    numberInput.value.includes(4) ||
    numberInput.value.includes(5) ||
    numberInput.value.includes(6) ||
    numberInput.value.includes(7) ||
    numberInput.value.includes(8) ||
    numberInput.value.includes(9)
  ) {
    alert("Binary only includes 0 and 1");
  } else {
    results.textContent = `Results: ${binaryToDecimal(numberInput.value)}`;
  }
});

dec2BinBtn.addEventListener("click", () => {
  results.textContent = `Results: ${decimalToBinary(numberInput.value)}`;
});

function binaryToDecimal(num) {
  return parseInt(num, 2);
}

function decimalToBinary(num) {
  return Number(num).toString(2);
}
