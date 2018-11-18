'use strict';

let sсreens = document.querySelectorAll(`template`);
// [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-4`, `stats`, `modal-error`, `modal-confirm`];
const Keys = {
  LEFT: 37,
  RIGHT: 39
};
/*
const wrap = (it) => {
  const shadow = document.createElement(`div`);
  const content = it.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};*/

const main = document.getElementById(`main`);
// const templates = sсreens.map(template);
let screen = 0;

const renderScreen = (item) => {
  main.innerHTML = ``;
  main.appendChild(sсreens(item).content.cloneNode(true));
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

/* const arrows = document.createElement(`div`);
arrows.innerHTML = `
`;

const createScreen = (evt) => {
  const div = document.createElement(`div`);
  div.innerHTML = evt;
  return div;
};
*/
// document.body.appendChild(createScreen(arrows));
const moveLeft = document.getElementById(`move_left`);
const moveRight = document.getElementById(`move_right`);
moveLeft.addEventListener(`click`, previousScreen);
moveRight.addEventListener(`click`, nextScreen);

renderScreen(screen);
