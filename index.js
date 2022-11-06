// in place of 6 we can write document.querySelector(.drum).length; for if incase more drums are added
for (var i = 0; i <= 6; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

  function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    setAnimation(buttonInnerHTML);
  }
}


document.addEventListener("keydown", handlePress);

function handlePress(event) {

  makeSound(event.key);
  setAnimation(event.key);
}

function makeSound(key) {
  switch (key) {

    case "w":
      var mySoundW = new Audio("sounds/tom-1.mp3");
      mySoundW.play();
      break;

    case "a":
     var mySoundA =  new Audio("sounds/tom-2.mp3");
     mySoundA.play();
     break;

     case "s":
     var mySoundS = new Audio("sounds/tom-3.mp3");
     mySoundS.play();
     break;

     case "d":
     var mySoundD = new Audio("sounds/tom-4.mp3");
     mySoundD.play();
     break;

     case "j":
     var mySoundJ = new Audio("sounds/snare.mp3");
     mySoundJ.play();
     break;

     case "k":
     var mySoundK = new Audio("sounds/crash.mp3");
     mySoundK.play();
     break;

     case "l":
     var mySoundL = new Audio("sounds/kick-bass.mp3");
     mySoundL.play();
     break;

     default: console.log(buttonInnerHTML);

  }
}

function setAnimation(currentKey) {
  var activeButton= document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);
}
