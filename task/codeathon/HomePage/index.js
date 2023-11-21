function toggleView(view) {
    var body = document.body;
    var homeView = document.getElementById('homeView');
    var aboutView = document.getElementById('aboutView');

    if (view === 'home') {
        body.classList.add('home-opened');
        homeView.style.display = 'block';
        aboutView.style.display = 'none';
    } else if (view === 'about') {
        body.classList.add('about-opened');
        homeView.style.display = 'none';
        aboutView.style.display = 'block';
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
