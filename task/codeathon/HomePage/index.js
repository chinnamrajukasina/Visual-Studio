function toggleView(view) {
    var body = document.body;
    var homeView = document.getElementById('homeView');
    var aboutView = document.getElementById('aboutView');

    if (view === 'home') {
        body.classList.add('home-opened');
        homeView.style.display = 'block';
        aboutView.style.display = 'none';
        body.classList.remove('about-opened');
    } else if (view === 'about') {
        body.classList.add('about-opened');
        homeView.style.display = 'none';
        aboutView.style.display = 'block';
        body.classList.remove('home-opened');
    }
}



function showInfo(infoNumber) {
    // Hide all info elements
    var infoElements = document.querySelectorAll('.info');
    infoElements.forEach(function (element) {
        element.classList.remove('active');
    });

    // Show the specific info element
    var specificInfoElement = document.getElementById('info-' + infoNumber);
    specificInfoElement.classList.add('active');

    // Hide other views if needed (e.g., aboutView)
    document.getElementById('aboutView').style.display = 'none';
    // Show the homeView
    document.getElementById('homeView').style.display = 'block';
}

function handleGridItemClick(event) {
    var clickedElement = event.target;

    // Remove 'clicked' class from all grid items
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (element) {
        element.classList.remove('clicked');
    });

    // Add 'clicked' class to the clicked grid item
    clickedElement.classList.add('clicked');
}

// Add click event listeners to all grid items
var gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(function (element) {
    element.addEventListener('click', handleGridItemClick);
});
// index.js

// Other functions...
function toggleContactDropdown() {
    var dropdownContent = document.getElementById('contactDropdown');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}
   // JavaScript function to open the new page
   function openNewPage() {
    // Redirect to the desired HTML page
    window.location.href = '../testFile/index.html' // Replace with the actual page path
}