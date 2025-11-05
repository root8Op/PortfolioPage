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

// Hero Section Animations
gsap.fromTo(".mainFrame", 
  {
    opacity: 0,
    scale: 0.9
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: "power3.out"
  }
);

// Staggered text animation
gsap.fromTo(".mainFrame h1, .mainFrame p", 
  {
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    delay: 0.5
  }
);

// Button fade in and bounce
gsap.fromTo(".m-BContainer", 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1.2
  }
);

// Optional: Hover animation for the button
const button = document.querySelector(".m-BContainer");
button.addEventListener("mouseenter", () => {
  gsap.to(".m-BContainer", {
    scale: 1.1,
    duration: 0.3
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(".m-BContainer", {
    scale: 1,
    duration: 0.3
  });
});


