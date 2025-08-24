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
