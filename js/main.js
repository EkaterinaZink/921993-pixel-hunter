'use strict';

const sсreens = document.querySelectorAll(`template`);
const Keys = {
  LEFT: 37,
  RIGHT: 39
};

const main = document.getElementById(`main`);
let screen = 0;

const renderScreen = (item) => {
  main.innerHTML = ``;
  main.appendChild(sсreens[item].content.cloneNode(true));
};

const nextScreen = () => {
  if (screen === sсreens.length - 1) {
    return;
  }
  renderScreen(++screen);
};

const previousScreen = () => {
  if (screen === 0) {
    return;
  }
  renderScreen(--screen);
};

const keyHandler = (evt) => {
  if (evt.keyCode === Keys.LEFT) {
    previousScreen();
  }
  if (evt.keyCode === Keys.RIGHT) {
    nextScreen();
  }
};
document.addEventListener(`keydown`, keyHandler);
const moveLeft = document.getElementById(`move_left`);
const moveRight = document.getElementById(`move_right`);
moveLeft.addEventListener(`click`, previousScreen);
moveRight.addEventListener(`click`, nextScreen);

renderScreen(screen);
