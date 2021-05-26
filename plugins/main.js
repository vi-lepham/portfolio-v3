import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let bodyScrollBar;

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const sections = selectAll("section");

const pageBackground = select('.a-background');

const loader = select('.a-loader');
const background = select('.a-background');

// images loaded
function init(){

    // show loader on page load
    gsap.set(loader, {autoAlpha: 1});

    // scale loader down
    gsap.set(loaderInner, {scaleY: 0.005, transformOrigin: 'bottom'});

    // make a tween that scales the loader
    const progressTween = gsap.to(progressBar, {paused: true, scaleX: 0, ease: 'none', transformOrigin: 'right'});

    // setup variables
    // https://codepen.io/desandro/pen/hlzaw
    let loadedImageCount = 0, imageCount;
    const container = select('#main');

    // setup Images loaded
    const imgLoad = imagesLoaded( container );
    imageCount = imgLoad.images.length;

    // set the initial progress to 0
    updateProgress(0);

    // triggered after each item is loaded
    imgLoad.on( 'progress', function() {
        // increase the number of loaded images
        loadedImageCount++;
        // update progress
        updateProgress( loadedImageCount );
    });

    // update the progress of our progressBar tween
    function updateProgress( value ) {
        // console.log(value/imageCount)
        // tween progress bar tween to the right value
        gsap.to(progressTween, {progress: value/imageCount, duration: 0.3, ease: 'power1.out'})
    }

    // do whatever you want when all images are loaded
    imgLoad.on( 'done', function( instance ) {
        // we will simply init our loader animation onComplete
        gsap.set(progressBar, {autoAlpha: 0, onComplete: initPageTransitions});
    });

}

init();


function initPageTransitions() {
    // do something before the transition starts
    barba.hooks.before(() => {
        select('html').classList.add('is-transitioning');
    });
    // do something after the transition finishes
    barba.hooks.after(() => {
        select('html').classList.remove('is-transitioning');
    });

    // scroll to the top of the page
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });

    barba.init({
        transitions: [{
            once() {
                initLoader();
            },
        }]
    });
}

function initLoader() {
    
    const tlLoaderIn = gsap.timeline({
        id: 'tlLoaderIn',
        defaults: {
            duration: 1.1,
            ease: 'power2.out'
        },
        onComplete: () => initContent()
    });

    const image = select('.loader__image img');
    const mask = select('.loader__image--mask');
    const line1 = select('.loader__title--mask:nth-child(1) span');
    const line2 = select('.loader__title--mask:nth-child(2) span');
    const lines = selectAll('.loader__title--mask');
    const loaderContent = select('.loader__content');

    tlLoaderIn
        .set(loaderContent, {autoAlpha: 1})
        .to(loaderInner, {
            scaleY: 1,
            transformOrigin: 'bottom',
            ease: 'power1.inOut'
        })
        .addLabel('revealImage')
        .from(mask, {yPercent: 100}, 'revealImage-=0.6')
        .from(image, {yPercent: -80}, 'revealImage-=0.6')
        .from([line1, line2], {yPercent: 100, stagger: 0.1}, 'revealImage-=0.4');

    const tlLoaderOut = gsap.timeline({
        id: 'tlLoaderOut',
        defaults: {
            duration: 1.2,
            ease: 'power2.inOut'
        },
        delay: 1
    });
    
    tlLoaderOut
        .to(lines, {yPercent: -500, stagger: 0.2}, 0)
        .to([loader, loaderContent], {yPercent: -100}, 0.2)
        .from('#main', {y: 150}, 0.2);

    const tlLoader = gsap.timeline();
    tlLoader
        .add(tlLoaderIn)
        .add(tlLoaderOut);

}

function initContent() {

    select('body').classList.remove('is-loading');
    initSmoothScrollbar();

}

const updateBodyColor = (color) => {
    // gsap.to('.fill-background', { backgroundColor: color, ease: 'none'});
    document.documentElement.style.setProperty('--bcg-fill-color', color);
}

// Smoooth Scrollbar
function initSmoothScrollbar() {
    
    bodyScrollBar = Scrollbar.init(select('#viewport'), {damping: 0.07});

    // remove horizontal scrollbar
    bodyScrollBar.track.xAxis.element.remove();

    // keep ScrollTrigger in sync with Smooth Scrollbar
    ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value; // setter
            }
            return bodyScrollBar.scrollTop;    // getter
        }
    });
    
    // when the smooth scroller updates, tell ScrollTrigger to update() too: 
    bodyScrollBar.addListener(ScrollTrigger.update);

}
