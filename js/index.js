const comOptions = ["batu", "gunting", "kertas"];
let isGameAlreadyBeenPlayed = false;

userChoose = (userPick) => {
    if (isGameAlreadyBeenPlayed === false) {
      const whatComputerChoose = comRandomizeOption();
      const areYouWin = checkWhoIsTheWinner(userPick, whatComputerChoose);
      addingBackgroundToOurChoice(userPick);
      addingBackgroundToComputerChoice(whatComputerChoose);
      generateResult(areYouWin);
      isGameAlreadyBeenPlayed = true;
    }
};

comRandomizeOption = () => {
    let index = generateRandom(3);
    return comOptions[index];
};

function generateRandom(maxLimit = 3) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand); // 99
    return rand;
}

generateResult = (value) => {
    if (value === "win") {
      document.getElementById("versus").style.display = "none"
      let winDisplay = document.getElementById("win-display");
      winDisplay.innerHTML = `<br><br><br>
      <img src="assets/player.png" class="teki1">
    <br>
    <a href="#" onclick="refreshButton()"><img src="assets/refresh.png" class="teki2"></a>`;
    } else if (value === "lose") {
      document.getElementById("versus").style.display = "none"
      let winDisplay = document.getElementById("win-display");
      winDisplay.innerHTML = `<br><br><br>
      <img src="assets/comwin.png" class="teki1">
    <br>
    <a href="#" onclick="refreshButton()"><img src="assets/refresh.png" class="teki2"></a>`;
    } else {
      document.getElementById("versus").style.display = "none"
      let winDisplay = document.getElementById("win-display");
      winDisplay.innerHTML = `<br><br><br>
      <img src="assets/draw.png" class="teki1">
    <br>
    <a href="#" onclick="refreshButton()"><img src="assets/refresh.png" class="teki2"></a>`;
    }

};

refreshButton = () => {
    // make sure game nya bisa dimainin ulang
    //isGameAlreadyBeenPlayed = false;
    //let whatJankenUserChoose = document.getElementsByClassName("being-choosen");
    //let whatJankenComChoose =
      //document.getElementsByClassName("being-choosen-com");
    //if (whatJankenUserChoose.length > 0) {
      //whatJankenUserChoose[0].classList.remove("being-choosen");
    //}
    //if (whatJankenComChoose.length > 0) {
      //whatJankenComChoose[0].classList.remove("being-choosen-com");
    //}
    let repeat = confirm("Apakah anda ingin mengulang ?")
    if(repeat){
    location.reload()
    }
};

checkWhoIsTheWinner = (userInput, comInput) => {
    if (userInput === "batu") {
      document.getElementById("resultbatu").style.backgroundColor = "#C4C4C4";
      if (comInput === "batu") {
        document.getElementById("resultbatu1").style.backgroundColor = "#C4C4C4";
        return "draw";
      } else if (comInput === "gunting") {
        document.getElementById("resultgunting1").style.backgroundColor = "#C4C4C4";
        return "win";
      } else {
        document.getElementById("resultkertas1").style.backgroundColor = "#C4C4C4";
        return "lose";
      }
    } else if (userInput === "gunting") {
      document.getElementById("resultgunting").style.backgroundColor = "#C4C4C4";
      if (comInput === "batu") {
        document.getElementById("resultbatu1").style.backgroundColor = "#C4C4C4";
        return "lose";
      } else if (comInput === "gunting") {
        document.getElementById("resultgunting1").style.backgroundColor = "#C4C4C4";
        return "draw";
      } else {
        document.getElementById("resultkertas1").style.backgroundColor = "#C4C4C4";
        return "win";
      }
    } else if (userInput === "kertas") {
      document.getElementById("resultkertas").style.backgroundColor = "#C4C4C4";
      if (comInput === "batu") {
        document.getElementById("resultbatu1").style.backgroundColor = "#C4C4C4";
        return "win";
      } else if (comInput === "gunting") {
        document.getElementById("resultgunting1").style.backgroundColor = "#C4C4C4";
        return "lose";
      } else {
        document.getElementById("resultkertas1").style.backgroundColor = "#C4C4C4";
        return "draw";
      }
    }
};

addingBackgroundToOurChoice = (ourChoice) => {
    let batuUser = document.getElementById("user-batu");
    let guntingUser = document.getElementById("user-gunting");
    let kertasUser = document.getElementById("user-kertas");
    let whoIsAlreadyBeenPickerd =
      document.getElementsByClassName("being-choosen");
    if (whoIsAlreadyBeenPickerd.length > 0) {
      whoIsAlreadyBeenPickerd[0].classList.remove("being-choosen");
    }
    if (ourChoice === "batu") {
      batuUser.classList.add("being-choosen");
    } else if (ourChoice === "gunting") {
      guntingUser.classList.add("being-choosen");
    } else {
      kertasUser.classList.add("being-choosen");
    }
};

addingBackgroundToComputerChoice = (ourChoice) => {
    let batuCom = document.getElementById("com-batu");
    let guntingCom = document.getElementById("com-gunting");
    let kertasCom = document.getElementById("com-kertas");
    let whoIsComputerPicked =
      document.getElementsByClassName("being-choosen-com");
    if (whoIsComputerPicked.length > 0) {
      whoIsComputerPicked[0].classList.remove("being-choosen-com");
    }
    if (ourChoice === "batu") {
      batuCom.classList.add("being-choosen-com");
    } else if (ourChoice === "gunting") {
      guntingCom.classList.add("being-choosen-com");
    } else {
      kertasCom.classList.add("being-choosen-com");
    }
};
