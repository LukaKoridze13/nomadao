import CONTRACT_ABI from "./abi.js";
// Contract
const CONTRACT_ADDRESS = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
const BRONZE = "93676693700634480901328071075319047135174375533609207086205073443957206159764";
const SILVER = "93676693700634480901328071075319047135174375533609207086205073445056717784540";
const GOLD = "93676693700634480901328071075319047135174375533609207086205073446156229411316";

const ourProjectsDropDownButton = document.getElementById("drop_down");
const ourProjectsDropDownBox = document.querySelector(".drop_down");
const sky = document.querySelector(".sky");
const land = document.querySelector(".land");
const mountain = document.querySelector(".mountain");
const mobileNavigationButton = document.querySelector(".menuOpen");
const headerNavigation = document.querySelector("header nav");
const buyNFT = document.querySelector(".buyNFT");
const link = "https://nomadao.net/hotel?location_id=&city_id=3381&hotel_id=null&dest_type=City&map_lat=&map_lgn=&map_place=Tbilisi&start=02%2F28%2F2023&end=03%2F01%2F2023&date=2023-02-28+-+2023-03-01&room=1&adults=1&children=0";
themeChange();
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
document.getElementById("start_date").value = `${year}-${month}-${day}`;
document.getElementById("end_date").value = `${year}-${month}-${day}`;

document.querySelector(".theme").addEventListener("click", () => {
  if (localStorage.getItem("Nomadao_Theme") === "light") {
    localStorage.setItem("Nomadao_Theme", "dark");
  } else {
    localStorage.setItem("Nomadao_Theme", "light");
  }
  themeChange();
});
// Our Projects Drop Down
ourProjectsDropDownButton.addEventListener("click", () => {
  if (ourProjectsDropDownBox.style.display !== "block") {
    ourProjectsDropDownBox.style.display = "block";
    ourProjectsDropDownButton.classList.add("drop_down_activated");
  } else {
    ourProjectsDropDownBox.style.display = "none";
    ourProjectsDropDownButton.classList.remove("drop_down_activated");
  }
});
mobileNavigationButton.addEventListener("click", () => {
  if (mobileNavigationButton.children[0].classList.contains("fa-bars")) {
    mobileNavigationButton.children[0].classList.remove("fa-bars");
    mobileNavigationButton.children[0].classList.add("fa-close");
    headerNavigation.remove();
    document.querySelector("header").appendChild(headerNavigation);
    document.querySelector("header").classList.add("header_active");
    buyNFT.remove();
    document.querySelector("header nav ul").appendChild(buyNFT);
    ourProjectsDropDownBox.classList.add("dropdown_active_mobile");
  } else {
    mobileNavigationButton.children[0].classList.add("fa-bars");
    mobileNavigationButton.children[0].classList.remove("fa-close");
    document.querySelector("header").classList.remove("header_active");
  }
});
document.getElementById("close_panel").addEventListener("click", () => {
  document.querySelector("header li").click();
  activateAlert("", "none");
});
// li items clicked
document.querySelectorAll("li").forEach((li, i) => {
  li.addEventListener("click", () => {
    if (i !== 1) {
      document.querySelectorAll("li").forEach((el) => {
        el.classList.remove("active");
      });
      li.classList.add("active");
      if (i == 4) {
        if (localStorage.getItem("Nomadao_Login") === "true") {
          openDashboard();
        } else {
          document.getElementById("panel").style.display = "flex";
        }
      } else {
        document.getElementById("panel").style.display = "none";
      }
      if (window.innerWidth < 681) {
        mobileNavigationButton.click();
      }
    }
  });
});
document.querySelectorAll(".drop_down a").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });
    ourProjectsDropDownButton.classList.add("active");
    document.getElementById("panel").style.display = "none";
    if (window.innerWidth < 681) {
      mobileNavigationButton.click();
    }
  });
});

// Swiper
let swipeCount = 0;
let swiper = document.querySelector(".swiper");
let swiperItems = document.querySelectorAll(".swiper-slide");
let swipe;
const px = 280 / 10;
const timeout = 3000 / 10;
swipe = setInterval(swipeF, timeout);
swiperItems.forEach((item, index) => {
  item.style.left = `${280 * index}px`;
  item.addEventListener("mouseover", () => {
    clearInterval(swipe);
    item.style.transform = "scale(1.2)";
  });
  item.addEventListener("mouseout", () => {
    swipe = setInterval(swipeF, timeout);
    item.style.transform = "scale(1)";
  });
});
function swipeF() {
  const swiper = document.querySelector(".swiper");
  const swiperItems = document.querySelectorAll(".swiper-slide");
  swiperItems.forEach((item, index) => {
    if (parseInt(item.style.left) < -px * 9 && index === 0) {
      item.remove();
      item.style.left = parseInt(swiperItems[swiperItems.length - 1].style.left) + 280 + "px";
      swiper.appendChild(item);
    }
    item.style.left = parseInt(item.style.left) - px + "px";
  });
}
// Metamask
const metamaskButton = document.getElementById("metamask");
const alert = document.getElementById("alert");
let web3;
let account;
metamaskButton.addEventListener("click", async () => {
  document.querySelector(".fa-spinner").style.display = "block";
  if (window.ethereum === undefined) {
    activateAlert("Please install Metamask to activate this feature", "install");
    document.querySelector(".fa-spinner").style.display = "none";
  } else {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      web3 = await new Web3(window.ethereum);
      await web3.eth.net.getId(async (err, netId) => {
        if (err) {
          console.error("Error getting network ID:", err);
        } else {
          if (netId === 137) {
            const accounts = await web3.eth.getAccounts();
            account = accounts[0];
            account = "0xcF1b2134812a36B7AD7592Aa8a7E7CB5321bF450";
            let contract = await new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            let bronze = await contract.methods.balanceOf(account, BRONZE).call();
            let silver = await contract.methods.balanceOf(account, SILVER).call();
            let gold = await contract.methods.balanceOf(account, SILVER).call();
            if (gold > 0) {
              login(account, "gold");
            } else if (silver > 0) {
              login(account, "silver");
            } else if (bronze > 0) {
              login(account, "bronze");
            } else {
              activateAlert("You must own NOMADAO NFT to use this feature");
            }
            document.querySelector(".fa-spinner").style.display = "none";
          } else {
            activateAlert("Please switch to Polygon Network in Metamask");
            document.querySelector(".fa-spinner").style.display = "none";
          }
        }
      });
    } catch (err) {
      activateAlert("You've rejected the request, try again", "none");
      document.querySelector(".fa-spinner").style.display = "none";
    }
  }
});
function activateAlert(text, type) {
  alert.innerHTML = "";
  alert.style.display = "flex";
  let p = document.createElement("p");
  p.innerText = text;
  alert.appendChild(p);
  if (type === "install") {
    let a = document.createElement("a");
    a.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
    a.innerText = "Install";
    a.target = "_blank";
    alert.appendChild(a);
  }
}
function login(add, type) {
  localStorage.setItem("Nomadao_Address", add);
  localStorage.setItem("Nomadao_Token", type);
  localStorage.setItem("Nomadao_Login", "true");
  openDashboard();
}
function openDashboard() {
  if (window.innerWidth < 481) {
    alert("User Panel is not available for mobile devices");
  } else {
    window.location.replace("./dashboard.html");
  }
}
// Clicked elsewhere
window.addEventListener("click", (event) => {
  if (event.target.parentNode.id !== "drop_down" && event.target.id !== "drop_down" && event.target !== ourProjectsDropDownBox) {
    ourProjectsDropDownBox.style.display = "none";
    ourProjectsDropDownButton.classList.remove("drop_down_activated");
  }
});
function themeChange() {
  if (localStorage.getItem("Nomadao_Theme") === "light" || localStorage.getItem("Nomadao_Theme") === null) {
    document.body.className = "";
    document.body.classList.add("light");
    // Theme Change Button
    document.querySelector(".theme").classList.remove("fa-sun");
    document.querySelector(".theme").classList.add("fa-moon");
    sky.style.transform = "translateX(-0%)";
    land.style.filter = "brightness(100%)";
    mountain.style.filter = "brightness(100%)";
  } else {
    document.body.className = "";
    document.body.classList.add("dark");
    // Theme Change Button
    document.querySelector(".theme").classList.add("fa-sun");
    document.querySelector(".theme").classList.remove("fa-moon");
    sky.style.transform = "translateX(-60%)";
    land.style.filter = "brightness(30%)";
    mountain.style.filter = "brightness(30%)";
  }
}
