import CONTRACT_ABI from "./abi.js";
// Contract
const CONTRACT_ADDRESS = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
const BRONZE = "93676693700634480901328071075319047135174375533609207086205073443957206159764";
const SILVER = "93676693700634480901328071075319047135174375533609207086205073445056717784540";
const GOLD = "93676693700634480901328071075319047135174375533609207086205073446156229411316";

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
const metamask = document.getElementById("metamask"); // Metamask Button

// let loaded = 0;
// land.addEventListener("load", () => {
//   loaded += 1;
//   if (loaded === 3) {
//     document.querySelector(".loading").style.display = "none";
//     document.querySelector(".container").style.display = "block";
//     localStorage.setItem("Nomadao-Loaded", true);
//     console.log("Land Loaded")
//   }
// });
// sky.addEventListener("load", () => {
//   loaded += 1;
//   if (loaded === 3) {
//     document.querySelector(".loading").style.display = "none";
//     document.querySelector(".container").style.display = "block";
//     localStorage.setItem("Nomadao-Loaded", true);
//     console.log("Sky Loaded")
//   }
// });
// mountain.addEventListener("load", () => {
//   loaded += 1;
//   if (loaded === 3) {
//     document.querySelector(".loading").style.display = "none";
//     document.querySelector(".container").style.display = "block";
//     localStorage.setItem("Nomadao-Loaded", true);
//     console.log("Mouintain Loaded")
//   }
// });

// if (localStorage.getItem("Nomadao-Loaded") === true) {
//   document.querySelector(".loading").style.display = "none";
//   document.querySelector(".container").style.display = "block";
// }

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
  mobileMenu.style.top = window.scrollY + "px";
  mobileMenu.style.width = window.innerWidth + "px";
  mobileMenu.style.height = window.innerHeight + "px";
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
  if (index !== 1 && index !== 5) {
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
// if (window.innerWidth > 480) {
//   // cards animation
//   let teamCards = document.querySelectorAll(".card");
//   teamCards.forEach((card, index) => {
//     if (index == 0) {
//       card.style.left = "0px";
//     } else if (index == 1) {
//       card.style.left = "50%";
//     } else {
//       card.style.left = "350px";
//     }
//   });
//   setInterval(() => {
//     let teamCards = document.querySelectorAll(".card");

//     teamCards.forEach((card) => {
//       card.style.zIndex = "0";
//       card.style.opacity = "0.8";
//       if (card.style.left === "0px") {
//         card.style.left = "350px";
//       } else if (card.style.left === "350px") {
//         card.style.top = "50px";
//         card.style.left = "50%";
//         card.style.zIndex = "10";
//         card.style.transform = "translateX(-50%)";
//         card.style.opacity = "1";
//       } else {
//         card.style.top = "0px";
//         card.style.left = "0px";
//         card.style.transform = "translateX(0)";
//       }
//     });
//   }, 4000);
// }

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

// Panel
const panelButton = document.querySelectorAll("li");
const panel = document.querySelector(".panel");
const snap = document.querySelector(".snap");
panelButton.forEach((li) => {
  if (li.innerText == "User Panel") {
    li.addEventListener("click", () => {
      panel.style.display = "block";
      snap.style.display = "none";
      mobileMenu.style.display = "none";
    });
  } else {
    li.addEventListener("click", () => {
      panel.style.display = "none";
      snap.style.display = "block";
      if (li.innerText === "Home") {
        document.getElementById("snap").scrollIntoView();
      } else if (li.innerText === "About us") {
        document.getElementById("about_us").scrollIntoView();
      }
    });
  }
});
let account;
// Metamask Login
metamask.addEventListener("click", async () => {
  let web3;
  if (window.ethereum === undefined) {
    alertCustom("Please Install Metamask to continue", true);
  } else {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      web3 = await new Web3(window.ethereum);
    } catch (err) {
      alertCustom("You've rejected login request", false);
    }
  }
  const accounts = await web3.eth.getAccounts();
  account = accounts[0];
  let contract = await new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  let bronze = await contract.methods.balanceOf(account, BRONZE).call();
  let silver = await contract.methods.balanceOf(account, SILVER).call();
  let gold = await contract.methods.balanceOf(account, GOLD).call();
  if (gold > 0 || silver > 0 || bronze > 0) {
    document.getElementById("dashboard").style.display = "block";
    metamask.style.display = "none";
  }
  if (gold > 0) {
    document.getElementById("dashboard").style.backgroundImage = "url(../Images/dashboard_gold.PNG)";
  } else if (silver > 0) {
    document.getElementById("dashboard").style.backgroundImage = "url(../Images/dashboard_silver.PNG)";
  } else if (bronze > 0) {
    document.getElementById("dashboard").style.backgroundImage = "url(../Images/dashboard_bronze.PNG)";
  } else {
    alertCustom("You don't own our NFT", false);
  }
});

function alertCustom(msg, inst) {
  if (document.querySelector(".customError") !== null) {
    document.querySelector(".customError").remove();
  }
  const box = document.createElement("div");
  box.classList.add("customError");
  document.body.appendChild(box);
  let size = metamask.getBoundingClientRect();
  box.style.top = "55%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%)";
  const box2 = document.createElement("div");
  const warning = document.createElement("img");
  warning.src = "./Images/warning.png";
  const message = document.createElement("p");
  message.innerText = msg;

  box2.append(warning, message);
  box.appendChild(box2);

  const install = document.createElement("a");
  install.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
  install.innerText = "Install extension";
  install.target = "_blank";
  const img = document.createElement("img");
  img.src = "./Images/extension.png";
  install.appendChild(img);
  if (inst) {
    box.append(install);
  }

  const close = document.createElement("img");
  close.src = "./Images/closeWarning.png";
  close.classList.add("closeWarning");
  box.appendChild(close);

  close.addEventListener("click", () => {
    box.remove();
  });
}

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  window.open("http://www.nomadao.net", '_blank');
});

document.querySelectorAll("#bookingForm li").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelectorAll("#bookingForm li").forEach((x) => {
      x.classList.remove('active')
    });
    event.target.classList.add('active')
  });
});

