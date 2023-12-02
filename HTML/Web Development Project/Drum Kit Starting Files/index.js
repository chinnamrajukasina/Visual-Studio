document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", () => handleButtonClick(button.innerHTML));
});

document.addEventListener("keypress", event => {
  handleButtonClick(event.key);
});

function handleButtonClick(key) {
  makeSound(key);
  buttonAnimation(key);
}

function makeSound(key) {
  const soundMap = {
    "w": "tom-1", "a": "tom-2", "s": "tom-3", "d": "tom-4",
    "j": "crash", "k": "kick-bass", "l": "snare"
  };
  new Audio(`sounds/${soundMap[key]}.mp3`).play();
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}
