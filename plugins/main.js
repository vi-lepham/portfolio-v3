import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const select = e => document.querySelector(e);

// Init locomotive scroll
/*function initSmoothScroll() {

  const lscroll = new LocomotiveScroll({
    el: select("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true,
  });

  lscroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? lscroll.scrollTo(value, 0, 0)
        : lscroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => lscroll.update());

  ScrollTrigger.refresh();

}

// Init loading animations
function initLoadingAnim() {
  // select components

  const loader = select(".a-loader");
  const firstScrollNumber = select(
    ".a-loader .loader-heading .heading-column:nth-child(2) .heading-row"
  );
  const secondScrollNumber = select(
    ".a-loader .loader-heading .heading-column:nth-child(3) .heading-row"
  );

  // animate numbers

  gsap.to(firstScrollNumber, {
    top: 0,
    bottom: "auto",
    duration: 2,
    ease: Power4.easeInOut
  });

  gsap.to(secondScrollNumber, {
    y: "-90%",
    duration: 2,
    ease: Power4.easeInOut
  });

  // animate loader out

  gsap.to(loader, {
    width: 0,
    display: "none",
    duration: 1,
    ease: Power4.easeInOut,
    delay: 2
  });
}

// Inner images parallax
function initImageParallax() {
  gsap.utils.toArray(".project-image").forEach(section => {
    const image = section.querySelector(".image-src");

    gsap.to(image, {
      top: "7%",
      ease: Power4.ease,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        scroller: "[data-scroll-container]",
      }
    });
  });
}

// Change background color on each project
function initBackgroundChange() {
  gsap.utils.toArray(".s-project .project-container").forEach(project => {
    let newColor = project.getAttribute("data-color");

    ScrollTrigger.create({
      trigger: project,
      start: "top 50%",
      end: `+=${project.clientHeight}`,
      scroller: "[data-scroll-container]",

      onEnter: () => updateBodyColor(newColor),

      onEnterBack: () => updateBodyColor(newColor)
    });
  });
}

const updateBodyColor = color => {
  document.documentElement.style.setProperty("--bg-color", color);
};

function init() {
  initSmoothScroll();
  initLoadingAnim();
  initImageParallax();
  initBackgroundChange();
}

init();

*/

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".a-main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".a-main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".a-main").style.transform
    ? "transform"
    : "fixed"
});

const loader = select(".a-loader");
const firstScrollNumber = select(
  ".a-loader .loader-heading .heading-column:nth-child(2) .heading-row"
);
const secondScrollNumber = select(
  ".a-loader .loader-heading .heading-column:nth-child(3) .heading-row"
);

// animate numbers

gsap.to(firstScrollNumber, {
  top: 0,
  bottom: "auto",
  duration: 2,
  ease: Power4.easeInOut
});

gsap.to(secondScrollNumber, {
  y: "-90%",
  duration: 2,
  ease: Power4.easeInOut
});

// animate loader out

gsap.to(loader, {
  width: 0,
  display: "none",
  duration: 1,
  ease: Power4.easeInOut,
  delay: 2
});

// Inner images parallax
gsap.utils.toArray(".project-image").forEach(section => {
  const image = section.querySelector(".image-src");

  gsap.to(image, {
    top: "7%",
    ease: Power4.ease,
    scrollTrigger: {
      trigger: section,
      scrub: true,
      scroller: "[data-scroll-container]"
    }
  });
});

gsap.utils.toArray(".s-project .project-container").forEach(project => {
  let newColor = project.getAttribute("data-color");

  ScrollTrigger.create({
    trigger: project,
    start: "top 50%",
    end: `+=${project.clientHeight}`,
    scroller: "[data-scroll-container]",

    onEnter: () => updateBodyColor(newColor),

    onEnterBack: () => updateBodyColor(newColor)
  });
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
