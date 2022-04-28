//Tilt EFFECT
VanillaTilt.init(document.querySelectorAll('.text-wrapper'), {
  max: 5,
});

const hamburgerIcon = document.querySelector('.hamburger-menu');
const navigationList = document.querySelector('.menu-list');

// NAVIGATION
hamburgerIcon.addEventListener('click', () => {
  navigationList.classList.toggle('show');
  hamburgerIcon.classList.toggle('active');
});

// CURSOR
const cursor = document.querySelector('.cursors');
const circle = cursor.querySelector('div');
const elementsWitoutCursor = document.querySelectorAll('.hide-cursor');

//Animate cursor
let aimX = 0;
let aimY = 0;

let currentX = 0;
let currentY = 0;
let speed = 0.2;
const animate = () => {
  currentX += (aimX - currentX) * speed;
  currentY += (aimY - currentY) * speed;
  circle.style.left = currentX + 'px';
  circle.style.top = currentY + 'px';

  requestAnimationFrame(animate);
};

animate();

document.addEventListener('mousemove', (event) => {
  aimX = event.pageX;
  aimY = event.pageY;
});

elementsWitoutCursor.forEach((element) => {
  element.addEventListener('mouseover', () => {
    circle.classList.add('invisible');
  });
  element.addEventListener('mouseout', () => {
    circle.classList.remove('invisible');
  });
});

//FADE IN TITLE
const titles = document.querySelectorAll('.section-title');
