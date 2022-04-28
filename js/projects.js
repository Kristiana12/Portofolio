window.addEventListener('scroll', animating);

function animating() {
  getEl('.projects__gallery--card', 'showCard');
  getEl('.section-title', 'slideIn');
  getEl('section-about', 'show');
}

function getEl(domEl, className) {
  const domElements = document.querySelectorAll(domEl);
  domElements.forEach((item) => {
    let distanceInViewport =
      item.getBoundingClientRect().top - window.innerHeight + 20;

    if (distanceInViewport < 0) {
      item.classList.add(className);
    } else {
      item.classList.remove(className);
    }
  });
}

animating();
