function shuffleDice() {


    var Player1Result = Math.ceil(Math.random() * 6);
    var Player2Result = Math.ceil(Math.random() * 6);
    var player1ResultImage = "images/dice" + Player1Result + ".png"
    var player2ResultImage = "images/dice" + Player2Result + ".png"


    if (Player1Result < Player2Result) {
        document.querySelector(".img1").setAttribute("src", player1ResultImage);
        document.querySelector(".container>h1").innerHTML = "plaer 2 wins"

    }
    else if (Player1Result > Player2Result) {
        document.querySelector(".img2").setAttribute("src", player2ResultImage);
        document.querySelector(".container>h1").innerHTML = "plaer 1 wins"
    }
    else {
        document.querySelector(".container>h1").innerHTML = "please try again"
    }
    // Reload the page after a brief delay (e.g., 2 seconds)
    setTimeout(function () {
        location.reload();
    }, 2000); // Adjust the delay as needed

}