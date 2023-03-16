const landing = document.querySelector(".landing");
const project = document.querySelector(".projectSection");
const text = "Services We Offer";
const textbox = document.getElementById("animatedText");
let index = 0;
if (window.scrollY >= window.innerHeight-200) {
  setInterval(() => {
    if (index < text.length) {
      let span = document.createElement("span");
      span.innerHTML = text[index];
      span.style.display = "inline-block";
      if (index == 0) {
        span.style.marginLeft = window.innerWidth * 1.5 + "px";
      } else {
        span.style.marginLeft = window.innerWidth * 1.5 + 5 * index + "px";
      }
      if (text[index] === " ") {
        span.classList.add("moveLeft10");
      } else {
        span.classList.add("moveLeft");
      }
      textbox.appendChild(span);
      index++;
    }
  }, 80);
}
document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && window.scrollY < window.innerHeight) {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    landing.setAttribute("id", "shrink");
    setInterval(() => {
      if (index < text.length) {
        let span = document.createElement("span");
        span.innerHTML = text[index];
        span.style.display = "inline-block";
        if (index == 0) {
          span.style.marginLeft = window.innerWidth * 1.5 + "px";
        } else {
          span.style.marginLeft = window.innerWidth * 1.5 + 5 * index + "px";
        }
        if (text[index] === " ") {
          span.classList.add("moveLeft10");
        } else {
          span.classList.add("moveLeft");
        }
        textbox.appendChild(span);
        index++;
      }
    }, 80);
  } else if (event.deltaY < 0 && window.scrollY > window.innerHeight - 100 && window.scrollY < window.innerHeight + 200) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    landing.removeAttribute("id");
  }
});
