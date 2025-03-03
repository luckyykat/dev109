// "Clear Screen" button
document.getElementById('clear').addEventListener('click', function(event) {
  // Find all elements with the class "dot"
  var dots = document.querySelectorAll('.dot');
  
  // Remove each dot from the page
  dots.forEach(function(dot) {
    dot.parentNode.removeChild(dot);
  });

  // Stop the click from doing other things (like drawing a dot)
  event.stopPropagation();
});

// When anywhere on the document is clicked (except the button)
document.addEventListener('click', function(event) {
  // Create a new div element for the dot
  var dot = document.createElement('div');
  dot.className = 'dot';  // Give it the "dot" class

  // Color and size values 
  var colorInput = document.getElementById('color');
  var sizeInput = document.getElementById('size');
  var dotColor = colorInput ? colorInput.value : 'blue';
  var dotSize = sizeInput ? parseInt(sizeInput.value, 10) : 8;
  
  // Set the dot's color and size
  dot.style.background = dotColor;
  dot.style.width = dotSize + 'px';
  dot.style.height = dotSize + 'px';

  // Position the dot so that it centers where you clicked.
  // We subtract half of the dot's size from the click position.
  dot.style.left = (event.pageX - dotSize / 2) + 'px';
  dot.style.top = (event.pageY - dotSize / 2) + 'px';

  // Add the dot to the page
  document.body.appendChild(dot);
});
