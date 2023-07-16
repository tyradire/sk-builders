const buttons = document.querySelectorAll('.project__button');
const leftBtn = buttons[0];
const rightBtn = buttons[1];

const slides = document.querySelector('.project__slides');

let counter = 1420;

const moveRight = () => {
  counter = counter - 1420;
  if (counter < 1419) {
    leftBtn.removeAttribute('disabled', '');
  }
  if (counter < 0) {
    rightBtn.setAttribute('disabled', '');
  }
  slides.style.transform = `translateX(${counter}px)`;
}

const moveLeft = () => {
  counter = counter + 1420;
  if (counter == 1420) {
    leftBtn.setAttribute('disabled', '');
  }
  if (counter > -1420) {
    rightBtn.removeAttribute('disabled', '');
  }
  slides.style.transform = `translateX(${counter}px)`;
}

leftBtn.addEventListener('click', () => moveLeft())
rightBtn.addEventListener('click', () => moveRight())