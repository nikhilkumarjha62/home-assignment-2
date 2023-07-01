function addition(a, b, c = 0, d = 0) {
    return a + b + c + d;
  }
  
  function subtraction(a, b, c = 0, d = 0) {
    return a - b - c - d;
  }
  
  function multiplication(a, b, c = 1, d = 1) {
    return a * b * c * d;
  }
  
  function division(a, b, c = 1, d = 1) {
    return a / b / c / d;
  }
  
  console.log("Addition:", addition(5, 2)); // Output: 7
  console.log("Subtraction:", subtraction(10, 3)); // Output: 7
  console.log("Multiplication:", multiplication(2, 3)); // Output: 6
  console.log("Division:", division(10, 2)); // Output: 5
  