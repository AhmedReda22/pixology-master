'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-wrapper');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.opacity = (i === index) ? '1' : '0'; // Fade effect
    testimonial.style.display = (i === index) ? 'flex' : 'none';
  });
}

document.querySelector('.left-arrow').addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex === 0) ? testimonials.length - 1 : currentTestimonialIndex - 1;
  showTestimonial(currentTestimonialIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex === testimonials.length - 1) ? 0 : currentTestimonialIndex + 1;
  showTestimonial(currentTestimonialIndex);
});

// Initialize the first testimonial
showTestimonial(currentTestimonialIndex);
