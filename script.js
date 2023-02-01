// Navigation

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach(link => link.addEventListener("click", toggleNav))

navToggler.addEventListener("click", toggleNav)

function toggleNav(){
  nav.classList.toggle("active");
  if(togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/cross.svg";
  } else {
    togglerImg.src = "ressources/hamburger.svg";
  }
}


// Smooth scroll links

const smoothScrollLinks = [
  ...navLinks,
  ...document.querySelectorAll(".hero a")
]
const sections = [...document.querySelectorAll("section")]

smoothScrollLinks.forEach(link => link.addEventListener("click", addSmoothScroll))

function addSmoothScroll(e) {
  e.preventDefault();
  const linkHref = e.target.getAttribute("href").substring(1);
  window.scrollTo({
    top: document.getElementById(linkHref).offsetTop * 0.95,
    behavior: "smooth"
  })
}

// Slideshow

const slideShowImages = document.querySelectorAll(".slideshow-image-container img")
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots .dot")
fadeSlideDots.forEach(dot => dot.addEventListener("click", fadeSlideshow))

let currentFadeIndex = 1;
let fadeIntervalID;

function fadeSlideshow(e){
  slideShowImages[currentFadeIndex - 1].classList.remove("active");
  fadeSlideDots[currentFadeIndex - 1].classList.remove("active");

  if(e) {
    currentFadeIndex = e.target.getAttribute("data-fadeIndex");
    clearInterval(fadeIntervalID);
    fadeIntervalID = setInterval(fadeSlideshow, 3500)
  } 
  else {
    currentFadeIndex++;
    if (currentFadeIndex > slideShowImages.length) {
      currentFadeIndex = 1;
    }
  }

  slideShowImages[currentFadeIndex - 1].classList.add("active");
  fadeSlideDots[currentFadeIndex - 1].classList.add("active");
}


fadeIntervalID = window.setInterval(fadeSlideshow, 3500)