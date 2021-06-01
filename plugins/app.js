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
  selectAll(".project-image").forEach(section => {
    const image = section.querySelector(".image-src");

    gsap.to(image, {
      top: "7%",
      ease: Power4.ease,
      scrollTrigger: {
        trigger: section,
        scrub: true,
      }
    });
  });
}

// Change background color on each project
function initBackgroundChange() {
  selectAll(".s-project .project-container").forEach(project => {
    let newColor = project.getAttribute("data-color");

    ScrollTrigger.create({
      trigger: project,
      start: "top 50%",
      end: `+=${project.clientHeight}`,

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
