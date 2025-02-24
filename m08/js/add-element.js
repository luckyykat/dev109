// Function to add an item to the list
function addItem() {
    var input = document.getElementById("newItem");
    var itemText = input.value.trim(); // Get input value 

    if (itemText === "") {
        alert("Please enter an item!"); // Prevent empty entries
        return;
    }

    var newEl = document.createElement('li'); // Create a new <li> element
    newEl.textContent = itemText; // Set Text

    var list = document.getElementById("todo"); // Find the <ul> list
    list.appendChild(newEl); // Append new item to the list

    input.value = ""; // Clear input field after adding
}

// Allow "Enter" key to submit item
document.getElementById("newItem").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});
