// Sean Tiner 2026

let hamburger = document.querySelector(".hamburgerButton");
let dropdownNav = document.querySelector(".dropdownNav");
let navbar = document.querySelector(".navbar");
let logo = document.getElementById("logo");

// Hamburger & Navbar Dropdown Menu
hamburger.addEventListener("click", e => {
    hamburger.classList.toggle("active");
    dropdownNav.classList.toggle("active");
});


// Handles Dropdown Animations -----------------------------------
const mediaQuery = window.matchMedia('(min-width: 600px)');

function onScroll() {
    if (window.scrollY > 75) {
        navbar.classList.add("scrolled");
        hamburger.classList.add("scrolled");
        dropdownNav.classList.add("scrolled");
        logo.src = "img/CompassMediumW.png";
    } else {
        navbar.classList.remove("scrolled");
        hamburger.classList.remove("scrolled");
        dropdownNav.classList.remove("scrolled");
        logo.src = "img/CompassMedium.png";
    }
}

function handleTabletChange(e) {
    if (e.matches) {
        window.addEventListener("scroll", onScroll);
        if (window.scrollY < 75) {
            navbar.classList.remove("scrolled");
            hamburger.classList.remove("scrolled");
            dropdownNav.classList.remove("scrolled");
            logo.src = "img/CompassMedium.png";
        }
    } else {
        window.removeEventListener("scroll", onScroll);

        navbar.classList.add("scrolled");
        hamburger.classList.add("scrolled");
        dropdownNav.classList.add("scrolled");
        logo.src = "img/CompassMediumW.png";
    }
}

mediaQuery.addEventListener('change', handleTabletChange);

handleTabletChange(mediaQuery);

// Media Query to Remove Card Animations When Screen is Less Than 1200px
const cardMediaQuery = window.matchMedia("(max-width: 1200px)")
let cards = document.querySelector(".cardContainer");

function handleCardResize(e) {
    if (e.matches) {
        cards.classList.remove("animateTransition", "animateOnScrollFade", "animateFromLeft");
    } 
}

cardMediaQuery.addEventListener("change", handleCardResize);

handleCardResize(cardMediaQuery);

// Other Animations ---------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const animationElements = document.querySelectorAll('.animateOnScrollFade, .animateFromTop, .animateFromLeft');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
  });

  animationElements.forEach(el => {
    observer.observe(el);
  });

});

