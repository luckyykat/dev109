// Prompt the user for a number
let num = prompt("Enter a number (0-10):", "5");

// Convert input to number and handle invalid inputs
num = Number(num);
if (isNaN(num) || num < 0 || num > 10) {
    num = 0; // Default to 0 if input is invalid
}

// Initialize the multiplication table message
let msg = "<h2>Multiplication Table</h2>";
for (let i = 1; i <= 10; i++) {
    msg += `${num} x ${i} = ${num * i} <br>`;
}

// Display result in the blackboard div
document.getElementById('blackboard').innerHTML = msg;
