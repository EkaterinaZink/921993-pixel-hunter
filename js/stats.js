import AbstractView from './view/abstractview.js';
import Router from './router.js';
import winScreen from './view/results-win.js';
import failScreen from './view/results-fail.js';

export default class Stats extends AbstractView {

  constructor(win, model) {
    super();
    this.win = win;
    this.model = model;
  }

  get template() {
    return this.win ? winScreen(this.model.results, this.model.state.lifes, this.model.getQuestions()) : failScreen(this.model.results, this.model.getQuestions());
  }

  bind() {
    const button = this.element.querySelector(`.back`);
    button.addEventListener(`click`, () => Router.showGreetings);
  }
}
