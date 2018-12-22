import resultsTemplate from '../results-chart.js';
import AbstractView from './abstractview.js';

export class FailScreen extends AbstractView {
  constructor(results, answers) {
    super();
    this.resultsChart = resultsTemplate(results, answers);
  }
  get template() {
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
    <h2 class="result__title">Поражение!</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
        ${this.resultsChart}
        </td>
        <td class="result__total"></td>
        <td colspan="5" class="result__total  result__total--final">Поражение!</td>
      </tr>
      </table>
    </section> `;
  }
}
