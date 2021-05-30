import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);


// Init locomotive scroll
function initSmoothScroll() {

  const lscroll = new LocomotiveScroll({
    el: select("[data-scroll-container]"),
    smooth: true,
    getDirection: true
  });

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
        scrub: true
      }
    });

  })

}

// Change background color on each project
function initBackgroundChange() {

  gsap.utils.toArray(".s-project .project-container").forEach(project => {

    let newColor = project.getAttribute("data-color")

    ScrollTrigger.create({
      trigger: project,
      start: "top 50%",
      end: `+=${project.clientHeight}`,

      onEnter: () => updateBodyColor(newColor),

      onEnterBack: () => updateBodyColor(newColor)
    })
  })

}

const updateBodyColor = color => {
  document.documentElement.style.setProperty("--bg-color", color);
}

function init() {

  initSmoothScroll();
  initLoadingAnim();
  initImageParallax();
  initBackgroundChange();

}

window.addEventListener("load", () => {

  init();

})