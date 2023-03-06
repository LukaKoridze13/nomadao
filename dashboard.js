const flights = JSON.parse(localStorage.getItem("Nomadao_Flights")) || [
  { from: "LAX", to: "JFK", date: "09-MAY-23", price: 812, price2022: 463, low: false, bought: false },
  { from: "MIA", to: "ORD", date: "16-JUL-23", price: 390, price2022: 502, low: true, bought: false },
  { from: "SEA", to: "BOS", date: "08-SEP-23", price: 558, price2022: 569, low: true, bought: false },
  { from: "LAS", to: "ATL", date: "21-MAR-23", price: 245, price2022: 348, low: true, bought: false },
  { from: "SFO", to: "IAD", date: "28-JUN-23", price: 684, price2022: 820, low: true, bought: false },
  { from: "PHX", to: "DTW", date: "13-DEC-23", price: 953, price2022: 502, low: false, bought: false },
  { from: "DEN", to: "LGA", date: "04-MAY-23", price: 708, price2022: 746, low: true, bought: false },
  { from: "DFW", to: "BWI", date: "19-JUL-23", price: 417, price2022: 251, low: false, bought: false },
  { from: "ORD", to: "LAX", date: "02-FEB-23", price: 422, price2022: 469, low: true, bought: false },
  { from: "ATL", to: "SFO", date: "15-NOV-23", price: 890, price2022: 863, low: false, bought: false },
  { from: "MCO", to: "JFK", date: "27-MAY-23", price: 569, price2022: 453, low: false, bought: false },
  { from: "PHL", to: "MIA", date: "09-JAN-23", price: 329, price2022: 268, low: false, bought: false },
  { from: "IAH", to: "ORD", date: "22-AUG-23", price: 728, price2022: 616, low: false, bought: false },
  { from: "EWR", to: "LAX", date: "11-APR-23", price: 301, price2022: 278, low: false, bought: false },
  { from: "DTW", to: "DFW", date: "02-JUN-23", price: 687, price2022: 712, low: true, bought: false },
  { from: "BOS", to: "SEA", date: "07-DEC-23", price: 936, price2022: 691, low: false, bought: false },
  { from: "LGA", to: "LAS", date: "30-SEP-23", price: 247, price2022: 312, low: true, bought: false },
  { from: "JFK", to: "MCO", date: "18-MAR-23", price: 174, price2022: 156, low: false, bought: false },
];

document.getElementById("sign_out").addEventListener("click", () => {
  localStorage.setItem("Nomadao_Login", "false");
});
const NFT = localStorage.getItem("Nomadao_Token");
const ADDRESS = localStorage.getItem("Nomadao_Address");
const BALANCE = localStorage.getItem("Nomadao_Balance") || 3000;
localStorage.getItem("Nomadao_Balance") === null && localStorage.setItem("Nomadao_Balance", 3000);
const MOON = document.querySelector(".fa-moon");
const SUN = document.querySelector(".fa-sun");
const ASIDE = document.querySelector("aside");
const TOP = document.querySelector(".top");
const BOTTOM = document.querySelector(".bottom");
const MYWALLET = document.querySelector(".mywallet");
const DASHBOARD = document.querySelector(".home");
const Pages = document.querySelectorAll(".d-pages");
const ASSETS = document.querySelector(".assets");
MYWALLET.addEventListener("click", () => {
  BOTTOM.style.display = "none";
  ASSETS.style.display = "flex";

  Pages.forEach((p) => {
    p.classList.remove("active");
  });
  MYWALLET.classList.add("active");
  drawOwnedFlights();
});
DASHBOARD.addEventListener("click", () => {
  BOTTOM.style.display = "flex";
  ASSETS.style.display = "none";
  Pages.forEach((p) => {
    p.classList.remove("active");
  });
  DASHBOARD.classList.add("active");
});
document.querySelector(".yourNFT").classList.add(localStorage.getItem("Nomadao_Token"));
document.querySelector(".you_own_img").src = "./Images/" + localStorage.getItem("Nomadao_Token") + ".png";
document.querySelector(".you_own").innerText = "You own " + localStorage.getItem("Nomadao_Token").toUpperCase() + " NFT";

ASIDE.addEventListener("mouseover", () => {
  ASIDE.classList.add("active");
  TOP.style.paddingLeft = "240px";
  BOTTOM.style.paddingLeft = "240px";
  ASSETS.style.paddingLeft = "240px";
});
ASIDE.addEventListener("mouseleave", () => {
  ASIDE.classList.remove("active");
  TOP.style.paddingLeft = "120px";
  BOTTOM.style.paddingLeft = "120px";
  ASSETS.style.paddingLeft = "120px";
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

document.getElementById("balance").innerText = "$ " + Number(BALANCE);

function setBalance(num) {
  num = Number(num);
  let before = Number(document.getElementById("balance").innerText.slice(2, document.getElementById("balance").innerText.length));
  const interval = setInterval(() => {
    if (before < num) {
      document.getElementById("balance").innerText = "$ " + before;
      before++;
    } else if (before > num) {
      document.getElementById("balance").innerText = "$ " + before;
      before--;
    } else {
      document.getElementById("balance").innerText = "$ " + num;
      localStorage.setItem("Nomadao_Balance", num);
      clearInterval(interval);
    }
  }, 1);
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
drawFlightsForSale();

function drawFlightsForSale() {
  document.querySelector(".container_fares").innerHTML = "";
  let num = 0;
  flights.forEach((flight) => {
    if (!flight.bought) {
      num++;
      const box = document.createElement("div");
      const location = document.createElement("div");
      const date = document.createElement("div");
      const price = document.createElement("div");
      const purchase = document.createElement("button");
      purchase.innerText = "Purchase";
      location.innerText = flight.from + "-" + flight.to;
      date.innerText = flight.date;
      price.innerText = flight.price + " USD";
      const span = document.createElement("span");
      price.appendChild(span);
      span.innerText = flight.low ? "Low" : "High";
      flight.low && span.classList.add("low");
      box.append(location, date, price, purchase);
      flight.low && box.classList.add("low");
      document.querySelector(".container_fares").appendChild(box);
      box.classList.add("flight_box");
      span.style.marginLeft = "10px";

      purchase.addEventListener("click", () => {
        if (Number(localStorage.getItem("Nomadao_Balance")) < flight.price) {
          alert("Not Enough Funds");
        } else {
          flight.bought = true;
          setBalance(Number(localStorage.getItem("Nomadao_Balance")) - flight.price);
          drawFlightsForSale();
          localStorage.setItem("Nomadao_Flights", JSON.stringify(flights));
        }
      });
    }
  });
  if (num === 0) {
    document.querySelector(".container_fares").innerHTML = "There are no flights available";
  }
}
function drawOwnedFlights() {
  document.querySelector(".container_owned_fares").innerHTML = "";
  let num = 0;
  flights.forEach((flight) => {
    if (flight.bought) {
      num++;
      const box = document.createElement("div");
      const location = document.createElement("div");
      const date = document.createElement("div");
      const price = document.createElement("div");
      const purchase = document.createElement("button");
      purchase.innerText = "Sell";
      location.innerText = flight.from + "-" + flight.to;
      date.innerText = flight.date;
      price.innerText = flight.price + " USD";
      // const span = document.createElement("span");
      // price.appendChild(span);
      // span.innerText = flight.low ? "Low" : "High";
      // flight.low && span.classList.add("low");
      box.append(location, date, price, purchase);
      flight.low && box.classList.add("low");
      document.querySelector(".container_owned_fares").appendChild(box);
      box.classList.add("flight_box");
      // span.style.marginLeft = "10px";

      purchase.addEventListener("click", () => {
        flight.bought = false;
        setBalance(Number(localStorage.getItem("Nomadao_Balance")) + flight.price);
        drawFlightsForSale();
        drawOwnedFlights();
        localStorage.setItem("Nomadao_Flights", JSON.stringify(flights));
      });
    }
  });
  if (num === 0) {
    document.querySelector(".container_owned_fares").innerHTML = "You don't have any owned flights yet";
  }
}
