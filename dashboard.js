document.getElementById("sign_out").addEventListener("click", () => {
  localStorage.setItem("Nomadao_Login", "false");
});

const NFT = localStorage.getItem("Nomadao_Token");
const ADDRESS = localStorage.getItem("Nomadao_Address");
const BALANCE = localStorage.getItem("Nomadao_Balance") || 3000;
const MOON = document.querySelector(".fa-moon");
const SUN = document.querySelector(".fa-sun");
MOON.addEventListener("click", () => {
  themeChange("dark");
});
SUN.addEventListener("click", () => {
  themeChange("light");
});
themeChange(localStorage.getItem("Nomadao_Theme"));
setBalance(BALANCE);




function setBalance(num) {
  document.getElementById("balance").innerText = "$ " + num;
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
