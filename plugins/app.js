import { gsap, TweenMax, Back, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const loader = select(".a-loader");
const firstScrollNumber = select(
  ".a-loader .loader-heading .heading-column:nth-child(2) .heading-row"
);
const secondScrollNumber = select(
  ".a-loader .loader-heading .heading-column:nth-child(3) .heading-row"
);

const scrollContainer = select("[data-scroll-container]");

const scroller = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function() {
  initLoader();

  initImageParallax();

  initChangeBackground();

  ScrollTrigger.addEventListener("refresh", () => scroller.update());

  ScrollTrigger.refresh();
});

function initLoader() {
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

function initImageParallax() {
  // Image parallax
  selectAll(".project-image").forEach(section => {
    const image = section.querySelector(".image-src");

    gsap.to(image, {
      scrollTrigger: {
        scroller: scrollContainer,
        trigger: section,
        scrub: true
      },
      top: "7%",
      ease: "none"
    });
  });
}

function initChangeBackground() {
  // Change bgc on scroll

  selectAll(".s-project .project-container").forEach(project => {
    let newColor = project.getAttribute("data-color");

    ScrollTrigger.create({
      scroller: scrollContainer,
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

function transitionEnter(el, done) {
  TweenMax.to(firstScrollNumber, 2, {
    top: 0,
    bottom: "auto",
    ease: Power4.easeInOut
  })

  TweenMax.to(secondScrollNumber, 2, {
    y: "-90%",
    ease: Power4.easeInOut
  })

  TweenMax.to(loader, 1, {
    width: 0,
    display: "none",
    ease: Power4.easeInOut,
    delay: 2,
    onComplete: done
  })

  TweenMax.to(el, {
    opacity: 1
  })
}

function transitionLeave(el, done) {
  TweenMax.to(loader, 1, {
    width: "100%",
    display: "block",
    ease: Power4.easeInOut,
    onComplete: done
  })
  TweenMax.to(el, {
    opacity: 0
  })
}

export {
  transitionEnter,
  transitionLeave
}