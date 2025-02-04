let num = prompt("Enter a number (0-10):", "5");

num = Number(num);
if (isNaN(num) || num < 0 || num > 10) {
    num = 0; // Default to 0 if input is invalid
}

let msg = "<h2>Multiplication Table</h2>";
for (let i = 1; i <= 10; i++) {
    msg += `${num} x ${i} = ${num * i} <br>`;
}

document.getElementById('blackboard').innerHTML = msg;
