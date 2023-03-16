const landing = document.querySelector(".landing");
const project = document.querySelector(".projectSection");
document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && (window.scrollY < window.innerHeight)) {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    landing.setAttribute('id', 'shrink')
  } else if(event.deltaY<0 && (window.scrollY > window.innerHeight-100 && window.scrollY < window.innerHeight+200 )){
    window.scrollTo({ top: 0, behavior: 'smooth' })
    landing.removeAttribute('id')


  }
});
