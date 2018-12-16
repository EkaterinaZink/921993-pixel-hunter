import Router from '../router.js';
import AbstractView from '../view/abstractview.js';

export default class IntroScreen extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;
  }

  bind() {
    const nextScreenButton = this.element.querySelector(`.intro__asterisk`);
    nextScreenButton.addEventListener(`click`, () => {
      Router.showGreetings();
    });
  }
}
