import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (document.querySelector("#hero:not(.alt-hero")) {
  const heroContent = document.querySelectorAll(".hero-content *");

  gsap.from(heroContent, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    delay: 0.5,
    stagger: 0.2,
  });
}

if (document.querySelector("#services")) {
  const serviceCards = document.querySelectorAll(".service-cards .card");

  gsap.from(serviceCards, {
    y: 50,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#services",
      start: "top center+=25%",
    },
  });
}

if (document.querySelector("#project-examples")) {
  const projectExamples = document.querySelectorAll(
    "#project-examples .project"
  );

  gsap.from(projectExamples, {
    autoAlpha: 0,
    x: -50,
    duration: 2,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#project-examples",
      start: "top center+=25%",
    },
  });
}
