const ourProjectsDropDownButton = document.getElementById("drop_down");
const ourProjectsDropDownBox = document.querySelector(".drop_down");
const sky = document.querySelector(".sky");
const land = document.querySelector(".land");
const mountain = document.querySelector(".mountain");

themeChange();
document.querySelector(".theme").addEventListener("click", () => {
  if (localStorage.getItem("Nomadao-Theme") === "light") {
    localStorage.setItem("Nomadao-Theme", "dark");
  } else {
    localStorage.setItem("Nomadao-Theme", "light");
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

// Clicked elsewhere
window.addEventListener("click", (event) => {
  if (event.target.parentNode.id !== "drop_down" && event.target !== ourProjectsDropDownBox) {
    ourProjectsDropDownBox.style.display = "none";
    ourProjectsDropDownButton.classList.remove("drop_down_activated");
  }
});
function themeChange() {
  if (localStorage.getItem("Nomadao-Theme") === "light") {
    document.body.className = "";
    document.body.classList.add('light');
    // Theme Change Button
    document.querySelector(".theme").classList.remove("fa-sun");
    document.querySelector(".theme").classList.add("fa-moon");
    sky.style.transform = "translateX(-0%)";
    land.style.filter = "brightness(100%)";
    mountain.style.filter = "brightness(100%)";
  } else {
    document.body.className = "";
    document.body.classList.add('dark');
    // Theme Change Button
    document.querySelector(".theme").classList.add("fa-sun");
    document.querySelector(".theme").classList.remove("fa-moon");
    sky.style.transform = "translateX(-60%)";
    land.style.filter = "brightness(30%)";
    mountain.style.filter = "brightness(30%)";
  }
}
