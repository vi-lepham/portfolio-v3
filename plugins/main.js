import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

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

window.addEventListener("load", () => {
  initLoadingAnim();

  const lscroll = new LocomotiveScroll({
    el: select("[data-scroll-container]"),
    smooth: true,
    getDirection: true
  });
});

// Inner images parallax

const imageContainers = selectAll(".project-image");

imageContainers.forEach(container => {
  const image = container.querySelector(".image-src");

  gsap.to(image, {
    top: "7%",
    ease: Power4.ease,
    scrollTrigger: {
      trigger: container,
      scrub: true
    }
  });
});

// Change background color on each project

const projects = selectAll(".s-project .project-container")

projects.forEach(project => {

    let newColor = project.getAttribute("data-color")

    ScrollTrigger.create({
      trigger: project,
      start: "top 60%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to("body", {
          duration: 1,
          backgroundColor: newColor
        })
      },

      onLeaveBack: () => {
        gsap.to("body", {
          duration: 1,
          backgroundColor: "#f3f3f1"
        })
      }
    })
})

