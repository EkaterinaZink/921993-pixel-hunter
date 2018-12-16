import AbstractView from './abstractview.js';
import resultsTemplate from '../results-chart.js';

export default class WinScreen extends AbstractView {
  constructor(results, lifes, answers) {
    super();
    this.results = results;
    this.lifes = lifes;
    this.answers = answers;
  }

  get template() {
    const RIGHT_ANSWER = 100;
    const LIFES = 50;
    const resultsChart = resultsTemplate(this.results, this.answers);
    const rightAnswers = this.results.filter((result) => result === `right`);
    const resultPointsLifes = this.lifes * LIFES;
    const resultPointsAnswers = rightAnswers.length * RIGHT_ANSWER;

    let lifesBonusTemplate = ``;
    if (this.lifes > 0) {
      lifesBonusTemplate = `<tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${this.lifes} <span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${resultPointsLifes}</td>
    </tr>`;
    }

    return `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
    </header>
    <section class="result">
    <h2 class="result__title">Победа!></h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
        ${resultsChart}
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${resultPointsAnswers}</td>
      </tr>
      ${lifesBonusTemplate}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${resultPointsAnswers + resultPointsLifes}</td>
      </tr>
    </table>
    </section> `;
  }
}
