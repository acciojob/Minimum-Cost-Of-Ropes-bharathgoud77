// Get the input element and button element
const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Get the array of rope lengths from the input value
  const ropeLengths = input.value.split(',').map(Number);

  // Sort the array in ascending order
  ropeLengths.sort((a, b) => a - b);

  // Initialize variables
  let cost = 0;
  let sum = ropeLengths[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < ropeLengths.length; i++) {
    // Add the current length to the sum
    sum += ropeLengths[i];

    // Add the sum to the cost
    cost += sum;

    // Reset the sum to the current length
    sum = ropeLengths[i];
  }

  // Display the minimum cost in the result div
  const result = document.getElementById('result');
  result.textContent = `Minimum cost: ${cost}`;
});