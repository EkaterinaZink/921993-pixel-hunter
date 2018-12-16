import {renderElement} from './utilits.js';
import renderScreen from './render-screen.js';
import greetingsScreen from './greetings-screen.js';

const markUp = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const introScreen = renderElement(markUp);
const nextScreenButton = screen.querySelector(`.intro__asterisk`);

nextScreenButton.addEventListener(`click`, () => renderScreen(greetingsScreen));

export default introScreen;

