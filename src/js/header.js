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
  if (document.querySelector("#hero")) {
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
  } else {
    header.classList.add("scrolled");
  }
});

//---------------------------------------
// Add active class to current page
//---------------------------------------

const currentPageUrl = new URL(window.location.href).pathname;

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  let linkPath = new URL(link.href).pathname;

  if (!linkPath.endsWith("/")) {
    linkPath += "/";
  }

  if (linkPath === currentPageUrl) {
    link.classList.add("active");
  }
});
