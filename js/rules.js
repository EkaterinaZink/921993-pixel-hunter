import {createDomElement} from './utilits.js';
import {renderHeader, HEADER_2} from './header.js';
import {startGame} from './game.js';

const markUp = `<section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;

const screen = createDomElement(markUp, renderHeader(HEADER_2));
const rulesInput = screen.querySelector(`.rules__input`);
const rulesButton = screen.querySelector(`.rules__button`);
const rulesForm = screen.querySelector(`.rules__form`);

rulesInput.addEventListener(`input`, (e) => {
  if (e.target.value !== ``) {
    rulesButton.removeAttribute(`disabled`);
  } else {
    rulesButton.setAttribute(`disabled`, `disabled`);
  }
});

rulesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  startGame();
});
export {screen as rulesScreen};
