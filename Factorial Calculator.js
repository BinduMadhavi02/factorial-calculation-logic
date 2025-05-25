function validateInput(value) {
  if (isNaN(value) || value < 0 || !Number.isInteger(Number(value))) {
    return false;
  }
  return true;
}

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

function calculateFactorial(method) {
  const input = document.getElementById("numberInput").value;
  const number = Number(input);
  const output = document.getElementById("output");

  if (!validateInput(number)) {
    output.textContent = "Please enter a valid positive integer.";
    return;
  }

  let result;
  if (method === "iterative") {
    result = factorialIterative(number);
  } else {
    result = factorialRecursive(number);
  }

  output.textContent = `Factorial of ${number} (${method}) is: ${result}`;
}
