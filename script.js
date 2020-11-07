const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let awaitingNewValue = false;
let operatorValue = '';

function sendNumberValue(number){
  // Replace current display value if first value is entered
  if (awaitingNewValue) {
    calculatorDisplay.textContent = number;
    awaitingNewValue = false;
  }else{
    // If current display value is 0, replace it, if not add number  
    const displayValue = calculatorDisplay.textContent;    
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  if (awaitingNewValue) return; 
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent += ".";
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Assign firstValue if no value
  if(!firstValue) {
    firstValue = currentValue;
  }
  // Ready for next value, store operator
  awaitingNewValue = true;
  operatorValue = operator;
}

// Add Event Listeners for numbers, operators, decimal buttons
  inputBtns.forEach( inputBtn => {
    if (inputBtn.classList.length === 0) {
      inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }else if (inputBtn.classList.contains('operator')) {
      inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }else if (inputBtn.classList.contains('decimal')) {
      inputBtn.addEventListener('click', addDecimal);
    }
  });

// Reset all values
function resetAll() {
  calculatorDisplay.textContent = '0';
    firstValue = 0;
    awaitingNewValue = false;
    operatorValue = '';
}

// Event listener for clear
clearBtn.addEventListener('click', resetAll);