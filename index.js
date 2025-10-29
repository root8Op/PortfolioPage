// nav indicator starts here
const navItems = document.querySelectorAll('.nav-item');
const indicator = document.querySelector('.indicator');

function updateIndicator(el) {
  indicator.style.left = el.offsetLeft + 'px';
  indicator.style.width = el.offsetWidth + 'px';

  navItems.forEach(item => item.classList.remove('active'));
  el.classList.add('active');
}

navItems.forEach(item => {
  item.addEventListener('click', () => updateIndicator(item));
});

// Initialize position
window.addEventListener('load', () => {
  const activeItem = document.querySelector('.nav-item.active');
  if (activeItem) updateIndicator(activeItem);
});

// nav indicator ends here


// gsap animations


// added a animation in the hero section


gsap.registerPlugin(ScrollTrigger);

gsap.from(".mainFrame > *", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".header",
    start: "top bottom",
    end: "bottom center",
    toggleActions: "play reverse play reverse"
  }
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".header",   // outer container
  content: ".mainFrame",   // inner scrollable content
  smooth: 2.5,                  // smoothness factor
  effects: true                 // enables ScrollTrigger effects
});

gsap.from(".mainFrame", {
  scrollTrigger: {
    trigger: ".mainFrame",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  },
  y: 100,
  opacity: 0,
  duration: 2
});


gsap.to(".overlay", ".greetings", ".para",{
  opacity: 1,
  duration: 1.5,
  ease: "power2.out",
  force3D: true,
});