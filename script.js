const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let decimalAdded = false;

function sendNumberValue(number){
  // If current display value is 0, replace it, if not add number  
  const displayValue = calculatorDisplay.textContent;    
  // if (number !== '.') {
  //   calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  // }else if (number === '.' && !decimalAdded) {
  //   calculatorDisplay.textContent = displayValue === '0' ? `0${number}` : displayValue + number;
  //   decimalAdded = true;
  // }
  // console.log(number);
  if (number !== '.' || !decimalAdded) {
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    if (number === '.'){
      decimalAdded = true;
    }
  }
}

// Add Event Listeners for numbers, operators, decimal buttons
  inputBtns.forEach( inputBtn => {
    if (inputBtn.classList.length === 0) {
      inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }else if (inputBtn.classList.contains('operator')) {
      inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }else if (inputBtn.classList.contains('decimal')) {
      inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }
  });

  clearBtn.addEventListener('click', () => {
    calculatorDisplay.textContent = '0'
    decimalAdded = false;
  });