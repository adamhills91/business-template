import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector("header");
const hero = document.querySelector("#hero");
//---------------------------------------
// Fill in header colour when scrolled
//---------------------------------------

let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  ScrollTrigger.create({
    trigger: hero,
    start: "top top-=25%",
    onEnter: () => {
      header.classList.add("scrolled");
    },
    onLeaveBack: () => {
      header.classList.remove("scrolled");
    },
  });
});

//---------------------------------------
// Add active class to current page
//---------------------------------------

const currentPageUrl = window.location.href;

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.href === currentPageUrl) {
    link.classList.add("active");
  }
});
