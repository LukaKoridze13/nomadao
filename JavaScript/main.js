// Burger Menu
const mobileMenu = document.querySelector(".mobile_menu"); // Mobile Navigation Menu
const burgerButton = document.querySelector(".burger_menu"); // Mobile Navigation Button
const closeBurgerMenu = document.querySelector(".close"); // Mobile Navigation Close Button
const lis = document.querySelectorAll("header li"); // All li elements in the header
const dropDown = document.querySelector("#drop_down"); // Drop Down Li element
const dropDownMenu = document.querySelector(".drop_down"); // Drop down menu desktop
const dropDownImage = document.querySelector("#drop_down img"); // drop down li image
const dropDownMobile = document.querySelector("#mobile_drop_down"); // Drop Down Li Mobile
const dropDownMenuMobile = document.querySelector(".mobile_drop_down"); // Drop Down Menu li Mobile
const dropDownImageMobile = document.querySelector("#mobile_drop_down img"); // Drop Down li img mobile
const dropDownAnchors = document.querySelectorAll(".drop_down a"); // Desktop Anchors in Drop Down
const dropDownMobileAnchors = document.querySelectorAll(".mobile_drop_down a"); // Mobile Anchors in Drop Down
const themeChange = document.querySelector(".theme"); // themeChange
const themeChangeMobile = document.querySelector(".theme_mobile"); // themeChange Mobile
const sky = document.querySelector(".sky"); // sky
const land = document.querySelector(".land"); // land
const mountain = document.querySelector(".mountain"); // mountain

let loaded = 0;
land.addEventListener("load", () => {
  loaded += 1;
  if (loaded === 3) {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
});
sky.addEventListener("load", () => {
  loaded += 1;
  if (loaded === 3) {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
});
mountain.addEventListener("load", () => {
  loaded += 1;
  if (loaded === 3) {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dark/light Mode
let theme = localStorage.getItem("Nomadao-Theme");
if (theme === null) {
  localStorage.setItem("Nomadao-Theme", "light");
  theme = "light";
}

// Rerenders webste depending on theme
if (theme === "light") {
  theme = "light";
  localStorage.setItem("Nomadao-Theme", "light");
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  themeChange.src = "./Images/moon.png";
  themeChangeMobile.src = "./Images/moon.png";
  sky.style.transform = "translateX(-0%)";
  land.style.filter = "brightness(100%)";
  mountain.style.filter = "brightness(100%)";
} else {
  theme = "dark";
  localStorage.setItem("Nomadao-Theme", "dark");
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  themeChange.src = "./Images/sun.png";
  themeChangeMobile.src = "./Images/sun.png";
  sky.style.transform = "translateX(-60%)";
  land.style.filter = "brightness(30%)";
  mountain.style.filter = "brightness(30%)";
}

// Open Mobile Navigation Menu
burgerButton.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});
// Close Mobile Navigation Menu
closeBurgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Drop Down Menu Show and Hide
dropDown.addEventListener("click", () => {
  dropDownMenu.classList.toggle("visible");
  dropDownImage.classList.toggle("rotate");
});
dropDownMobile.addEventListener("click", () => {
  dropDownMenuMobile.classList.toggle("visible");
  dropDownImageMobile.classList.toggle("rotate");
});

// Active li items when you click
lis.forEach((li, index) => {
  // Don't activate li if it's our project section
  if (li.innerText !== "Our Projects " && index !== 5) {
    li.addEventListener("click", (e) => {
      lis.forEach((li) => {
        li.classList.remove("active");
      });
      li.classList.add("active");
    });
  }
});

// Close mobile navigation menu when project anchor is clicked
dropDownMobileAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    closeBurgerMenu.click();
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    dropDownMobile.classList.add("active");
  });
});
dropDownAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    console.log("Anchor clicked");
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    dropDown.classList.add("active");
  });
});

// Close mobiel drop drown menu when elswhere is clicked
document.addEventListener("click", (event) => {
  if (event.target.parentNode.id !== "drop_down" && event.target.id !== "drop_down") {
    dropDownMenu.classList.remove("visible");
    dropDownImage.classList.remove("rotate");
  }
  if (event.target.parentNode.id !== "mobile_drop_down" && event.target.id !== "mobile_drop_down") {
    dropDownMenuMobile.classList.remove("visible");
    dropDownImageMobile.classList.remove("rotate");
  }
});

// Change theme
themeChange.addEventListener("click", () => {
  changeTheme();
});
themeChangeMobile.addEventListener("click", () => {
  changeTheme();
});

function changeTheme() {
  if (theme === "dark") {
    theme = "light";
    localStorage.setItem("Nomadao-Theme", "light");
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeChange.src = "./Images/moon.png";
    themeChangeMobile.src = "./Images/moon.png";
    sky.style.transform = "translateX(-0%)";
    land.style.filter = "brightness(100%)";
    mountain.style.filter = "brightness(100%)";
  } else {
    theme = "dark";
    localStorage.setItem("Nomadao-Theme", "dark");
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeChange.src = "./Images/sun.png";
    themeChangeMobile.src = "./Images/sun.png";
    sky.style.transform = "translateX(-60%)";
    land.style.filter = "brightness(30%)";
    mountain.style.filter = "brightness(30%)";
  }
}

// Rotating Cards
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

function arisSxvaSimbolo(event) {
  const alphabet = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";
  let sheicavsSxvaSimbolos = false; // თუ ეს ცვლადი გახდა true, ესეიგი ქართულის გარდა სხვა სიმბოლოსაც შეიცავს
  for (let x of event.target.value) {
    // თუ aplhabet ანუ ქართული ანბანი არ შიეცავს x(რომელიც არის არის text-ად გადმოცემული სტრინგის თითოეული ასო ლუპში), ესეიგი x სხვა სიმბოლოა და sheicavsSxvaSimbolos ცვლადი ხდება true.
    if (!alphabet.includes(x)) {
      sheicavsSxvaSimbolos = true;
      break;
    }
  }
  return sheicavsSxvaSimbolos;
}
