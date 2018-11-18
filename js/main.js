'use strict';

const SCREENS = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-4`, `stats`, `modal-error`, `modal-confirm`];
const LEFT = 37;
const RIGHT = 39;
const wrap = (it) => {
  const shadow = document.createElement(`div`);
  const content = it.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};

const main = document.getElementById(`main`);
const templates = SCREENS.map((id) => {
  return wrap(document.querySelector(`#${id}`));
});
let screen = 0;

const renderScreen = (item) => {
  main.innerHTML = ``;
  main.appendChild(templates(item).content.cloneNode(true));
};

document.addEventListener(`keydown`, keyHandler);

const keyHandler = (evt) => {
  if (evt.keyCode === LEFT) {
    previousScreen();
  }
  if (evt.keyCode === RIGHT) {
    nextScreen();
  }
};

const nextScreen = () => {
  if (screen === SCREENS.length - 1) {
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

const arrows = document.createElement(`div`);
arrows.innerHTML = `
<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button id="move_left" class="arrows__btn"><-</button>
<button id="move_right" class="arrows__btn">-></button>
</div>`;

const createScreen = (evt) => {
  const div = document.createElement(`div`);
  div.innerHTML = evt;
  return div;
};

document.body.appendChild(createScreen(arrows));
const moveLeft = document.getElementById(`move_left`);
const moveRight = document.getElementById(`move_right`);
moveLeft.addEventListener(`click`, previousScreen);
moveRight.addEventListener(`click`, nextScreen);

renderScreen(screen);
