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

let mountain = document.querySelector('.mountain')
let sky = document.querySelector('.sky')
let background = document.querySelector('.background')

if(window.innerWidth>1440){
  sky.style.left = `-${(1920-window.innerWidth)/2}px`
  background.style.left = `-${(1920-window.innerWidth)/2}px`
  sky.style.top = `-${(1278-window.innerHeight)/2}px`
  background.style.bottom = `-${(1278-window.innerHeight)/2}px`
  mountain.style.bottom =`${-(1278-window.innerHeight)/2+435.99}px` 
  mountain.style.right = `-${(1920-window.innerWidth)/2}px`
}else if(window.innerWidth>480){
  sky.style.left = `-${(1920/1.33-window.innerWidth)/2}px`
  background.style.left = `-${(1920/1.33-window.innerWidth)/2}px`
  sky.style.top = `-${(1278/1.33-window.innerHeight)/2}px`
  background.style.bottom = `-${(1278/1.33-window.innerHeight)/2}px`
  mountain.style.bottom =`${-(1278/1.33-window.innerHeight)/2+435.99/1.33}px` 
  mountain.style.right = `-${(1920/1.33-window.innerWidth)/2}px`
  if(window.innerHeight>667){
    sky.style.left = `-${(1920/1.5-window.innerWidth)/2}px`
  background.style.left = `-${(1920/1.5-window.innerWidth)/2}px`
  sky.style.top = `-${(1278/1.5-window.innerHeight)/2}px`
  background.style.bottom = `-${(1278/1.5-window.innerHeight)/2}px`
  mountain.style.bottom =`${-(1278/1.5-window.innerHeight)/2+435.99/1.5}px` 
  mountain.style.right = `-${(1920/1.5-window.innerWidth)/2}px`
  }
}else{
  sky.style.left = `-${(1920/2-window.innerWidth)/2}px`
  background.style.left = `-${(1920/2-window.innerWidth)/2}px`
  sky.style.top = `-${(1278/1.5-window.innerHeight)/2}px`
  background.style.bottom = `-${(1278/1.5-window.innerHeight)/2}px`
  mountain.style.bottom =`${-(1278/1.5-window.innerHeight)/2+435.99/1.5}px` 
  mountain.style.right = `-${(1920/2-window.innerWidth)/2}px`
}