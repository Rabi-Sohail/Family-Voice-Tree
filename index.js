var clickPicture = document.querySelectorAll(".voice").length;


//Check the click
for (var i = 0; i < clickPicture; i++) {
  document.querySelectorAll(".voice")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonEvent(buttonInnerHTML);

  });
}


//check the Key-press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonEvent(event.key);
});

function makeSound(event) {
  switch (event) {
    case "s":
      var audio1 = new Audio("sounds/Sabika.mp3");
      audio1.play();
      break;

    case "n":
      var audio2 = new Audio("sounds/Nick.mp3");
      audio2.play();
      break;

    case "g":
      var audio3 = new Audio("sounds/Gobi.mp3");
      audio3.play();
      break;

    case "r":
      var audio4 = new Audio("sounds/Rabi.mp3");
      audio4.play();
      break;

    case "t":
      var audio5 = new Audio("sounds/Tony.mp3");
      audio5.play();
      break;
    default:
      console.log(buttonInnerHTML)
  }
}

function buttonEvent(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 120);

}
