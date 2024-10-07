import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function setupFadeIn() {
  const fadeInElements = document.querySelectorAll(".jsfadeIn");
  if (fadeInElements.length > 0) {
    fadeInElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power1.out",
      });
    });
  }
}

function setupFadeInLeft() {
  const fadeInLeftElements = document.querySelectorAll(".jsfadeInLeft");
  if (fadeInLeftElements.length > 0) {
    fadeInLeftElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power1.out",
      });
    });
  }
}

function setupFadeInRight() {
  const fadeInRightElements = document.querySelectorAll(".jsfadeInRight");
  if (fadeInRightElements.length > 0) {
    fadeInRightElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power1.out",
      });
    });
  }
}

function setupScale() {
  const jsScaleElements = document.querySelectorAll(".jsScale");
  if (jsScaleElements.length > 0) {
    jsScaleElements.forEach((jsScale) => {
      gsap.fromTo(
        jsScale,
        { scale: 1.2 },
        {
          scrollTrigger: {
            trigger: jsScale,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            once: true,
          },
          scale: 1,
          ease: "power1.out",
          duration: 2.0,
        }
      );
    });
  }
}

export function initializeAnimations() {
  setupFadeIn();
  setupFadeInLeft();
  setupFadeInRight();
  setupScale();
}
