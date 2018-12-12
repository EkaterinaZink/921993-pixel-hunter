import {createDomElement, renderScreen} from './utilits.js';
import {greetingsScreen} from './greetings';

const HEADER_1 = 1;
const HEADER_2 = 0;

const headerButton = `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>`;

const gameTimer = (state) => `<div class="game__timer">${state.time}</div>`;
const gameLifes = (state) => `<div class="game__lives">${new Array(3 - state.lifes)
  .fill(
      `<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`
  )
  .join(``)}
${new Array(state.lifes)
    .fill(
        `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`
    )
    .join(``)}
</div>`;

const headerIntro = (state) => `<header class="header">
${headerButton}
${gameTimer(state)}
${gameLifes(state)}
</header>`;

const headerGameScreen = `<header class="header">
${headerButton}
</header>`;

const renderHeader = (headerType, state) => {
  const header = createDomElement(headerType === HEADER_1 ? headerIntro(state) : headerGameScreen);
  header
    .querySelector(`.back`)
    .addEventListener(`click`, (e) => {
      e.preventDefault();
      renderScreen(greetingsScreen);
    });
  return header;
};

export {renderHeader, HEADER_1, HEADER_2};

