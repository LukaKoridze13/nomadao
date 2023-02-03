setInterval(() => {
  let teamCards = document.querySelectorAll(".card");
  let wrapper = document.querySelector(".our_team .right");
  let firstCard;
  let secondCard;
  let mainCard;
  teamCards.forEach((card, index) => {
    if (index == 0) {
      card.style.top = "0px";
      card.style.left = "350px";
      firstCard = card;
    }
    if (index == 1) {
      card.style.top = "50px";
      card.style.left = "0px";
      card.style.transform = "translateX(-0)";
      card.style.zIndex = "0";
      mainCard = card;
    }
    if (index == 2) {
      card.style.top = "0px";
      card.style.left = "50%";
      card.style.zIndex = "10";
      card.style.transform = "translateX(-50%)";
      secondCard = card;
    }
  });
  wrapper.innerHTML = "";
  wrapper.append(mainCard, secondCard, firstCard);
}, 2000);
