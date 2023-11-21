function validateSignIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'Ekip' && password === 'Ekip@123') {
        setTimeout(() => {
            alert('Sign-in successful!');
            document.body.style.backgroundImage = 'url("./resource/welcome.jpeg")';
            document.getElementById('signInForm').style.display = 'none';
            setTimeout(() => {
                window.location.href = '../HomePage/index.html';
            }, 1000); // Adjust the delay time as needed
        }, 500);
    } else if (username === '' || password === '') {
        setTimeout(() => alert('Please enter your credentials or click the Sign Up button.'), 500);
        document.body.style.backgroundImage = 'url("./resource/empty.jpeg")';
    } else {
        setTimeout(() => alert('Please enter correct credentials.'), 500);
        document.body.style.backgroundImage = 'url("./resource/wrong.jpeg")';
        document.body.style.backgroundSize = '100% 100%';
    }
}

function validateSignUp() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (newUsername !== '' && newPassword !== '' && confirmNewPassword !== '') {
        if (newPassword === confirmNewPassword) {
            setTimeout(() => alert('Please enter correct credentials.'), 500);
            document.body.style.backgroundImage = 'url("./resource/success_orangutan.jpg")';
            document.body.style.backgroundSize = '100% 100%';
            //document.getElementById('signUpForm').style.display = 'none';
            loadSignIn();
        } else {
            setTimeout(() => alert('Passwords do not match. Please try again.'), 500);
            document.body.style.backgroundImage = 'url("./resource/wrong.jpeg")';
        }
    } else {
        setTimeout(() => alert('Please enter all required fields.'), 500);
        document.body.style.backgroundImage = 'url("./resource/empty.jpeg")';
    }
}

function loadSignUp() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

function loadSignIn() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
}
