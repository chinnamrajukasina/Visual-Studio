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
