function add(a,b) {
  console.log(add(a, b)).toEqual(a + b);
}

function subtract(a,b) {
  console.log(a - b);
}


function multiply(a,b) {
  console.log(a * b);
}

function divide(a,b) {
  console.log(a / b);
}

function inc(n) {
  console.log(n += n);
}

function dec(n) {
  console.log(n -= n);
}

function makeInt(n) {
  parseInt(n, 10);
}

function preserveDecimal(n) {
  parseFloat(n);
}

