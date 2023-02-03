if (window.innerWidth > 480) {
  // cards animation
  let teamCards = document.querySelectorAll(".card");
  teamCards.forEach((card, index) => {
    if (index == 0) {
      card.style.left = "0px";
    } else if (index == 1) {
      card.style.left = "50%";
    } else {
      card.style.left = "350px";
    }
  });
  setInterval(() => {
    let teamCards = document.querySelectorAll(".card");

    teamCards.forEach((card) => {
      card.style.zIndex = "0";
      card.style.opacity = "0.8";
      if (card.style.left === "0px") {
        card.style.left = "350px";
      } else if (card.style.left === "350px") {
        card.style.top = "50px";
        card.style.left = "50%";
        card.style.zIndex = "10";
        card.style.transform = "translateX(-50%)";
        card.style.opacity = "1";
      } else {
        card.style.top = "0px";
        card.style.left = "0px";
        card.style.transform = "translateX(0)";
      }
    });
  }, 4000);
}
