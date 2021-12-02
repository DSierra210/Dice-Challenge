if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let dice1 = "./images/dice" + randomNumber1 + ".png";
  let dice2 = "./images/dice" + randomNumber2 + ".png";

  const img1 = document.getElementById("dice1");
  const img2 = document.getElementById("dice2");
  const header1 = document.querySelector("h1");
  img1.setAttribute("src", dice1);
  img2.setAttribute("src", dice2);

  if (randomNumber1 > randomNumber2) {
    header1.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    header1.innerHTML = "Player 2 Wins!";
  } else {
    header1.innerHTML = "Draw!";
  }
}
