document.getElementById("sign_out").addEventListener("click", () => {
  localStorage.setItem("Nomadao_Login", "false");
});
const NFT = localStorage.getItem("Nomadao_Token");
const ADDRESS = localStorage.getItem("Nomadao_Address");
const BALANCE = localStorage.getItem("Nomadao_Balance") || 3000;
const MOON = document.querySelector(".fa-moon");
const SUN = document.querySelector(".fa-sun");
const ASIDE = document.querySelector("aside");
const TOP = document.querySelector(".top");

document.querySelector('.yourNFT').classList.add(localStorage.getItem("Nomadao_Token"))
document.querySelector('.you_own_img').src = './Images/'+localStorage.getItem("Nomadao_Token")+".png"
document.querySelector('.you_own').innerText = "You own " + localStorage.getItem("Nomadao_Token").toUpperCase() + " NFT"

ASIDE.addEventListener("mouseover", () => {
  ASIDE.classList.add("active");
  TOP.style.paddingLeft = "240px";
});
ASIDE.addEventListener("mouseleave", () => {
  ASIDE.classList.remove("active");
  TOP.style.paddingLeft = "120px";
});

MOON.addEventListener("click", () => {
  themeChange("dark");
});
SUN.addEventListener("click", () => {
  themeChange("light");
});
if (localStorage.getItem("Nomadao_Theme") === "light") {
  SUN.classList.remove("active");
  MOON.classList.add("active");
} else {
  MOON.classList.remove("active");
  SUN.classList.add("active");
}

setBalance(BALANCE);

function setBalance(num) {
  num =  Number(num)
  document.getElementById("balance").innerText = "$ " + num.toFixed(2);
  localStorage.setItem("Nomadao_Balance", num)
}

function themeChange(theme) {
  localStorage.setItem("Nomadao_Theme", theme);
  if (theme === "light") {
    SUN.classList.remove("active");
    MOON.classList.add("active");
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    MOON.classList.remove("active");
    SUN.classList.add("active");
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}
