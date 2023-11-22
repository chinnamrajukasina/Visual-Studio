// Add your JavaScript code here

// Form submission handling
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
});

var switchElement = document.getElementById('mySwitch');

// Add an event listener to the switch
switchElement.addEventListener('change', function () {
  // Toggle the background color of the body
  document.body.style.backgroundColor = switchElement.checked ? 'tan' : '#f4f4f4';
});
