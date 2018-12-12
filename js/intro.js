import {createDomElement, renderScreen} from './utilits.js';
import {greetingsScreen} from './greetings';

const markUp = `  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const screen = createDomElement(markUp);
const buttonToNextScreen = screen.querySelector(`.intro__asterisk`);
buttonToNextScreen.addEventListener(`click`, (e) => {
  e.preventDefault();
  renderScreen(greetingsScreen);
});

export {screen as introScreen};
