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
// Burger Menu
const mobileMenu = document.querySelector(".mobile_menu");
const burgerButton = document.querySelector(".burger_menu");
const closeBurgerMenu = document.querySelector(".close");
burgerButton.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});
closeBurgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Our Projects drop down
const dropDown = document.querySelector("#drop_down");
const dropDownMenu = document.querySelector(".drop_down");
const dropDownImage = document.querySelector("#drop_down img");
dropDown.addEventListener('click',()=>{
  dropDownMenu.classList.toggle('visible')
  dropDownImage.classList.toggle('rotate')
})

const dropDownMobile = document.querySelector("#mobile_drop_down");
const dropDownMenuMobile = document.querySelector(".mobile_drop_down");
const dropDownImageMobile = document.querySelector("#mobile_drop_down img");
dropDownMobile.addEventListener('click',()=>{
  dropDownMenuMobile.classList.toggle('visible')
  dropDownImageMobile.classList.toggle('rotate')
})
const dropDownAnchors = dropDownMobile.querySelectorAll('.drop_down a')
const dropDownMobileAnchors = document.querySelectorAll(".mobile_drop_down a")
dropDownMobileAnchors.forEach((e)=>{
  e.addEventListener('click', () =>{
    closeBurgerMenu.click()
  })
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Active li
const lis =  document.querySelectorAll('header li')
lis.forEach((li,index)=>{
  li.addEventListener('click', (e)=>{
    lis.forEach((li)=>{
      li.classList.remove('active')
    })
    li.classList.add('active');
  })
})