import AbstractView from "./abstractview.js";
import {Points} from "../utilits.js";
import {countPoints} from "../data/count-points.js";
import StatsView from "./stats-view.js";

export default class CountPointsView extends AbstractView {

  constructor(results) {
    super();
    this.state = results;
  }

  get template() {
    const title = this._win(this.state[this.state.length - 1]) ? `Победа` : `Поражение`;
    return `<section class="result">
      <h2 class="result__title">${title}</h2>
      ${this.state
        .reverse()
        .map((result, i) => this._getResultTemplate(result, i))
        .join(``)}
    </section>`;
  }
  _getStatsList(result) {
    return new StatsView(result.answers).template;
  }

  _getResultPoints(result) {
    return countPoints(result.answers, result.lifes);
  }

  _win(result) {
    return this._getResultPoints(result).total !== -1;
  }

  _getResultTemplate(result, i) {
    const gameWin = this._win(result);
    const gameResult = this._getResultPoints(result);
    return `<table class="result__table">
        <tr>
          <td class="result__number">${i + 1}.</td>
          <td colspan="2">
          ${this._getStatsList(result)}
          </td>
          ${gameWin ? `<td class="result__points">× ${Points.RIGHT_ANSWER}</td>` : ``}
          <td class="result__total${gameWin ? `">` + gameResult.right * Points.RIGHT_ANSWER : ` result__total--final"> FAIL`}</td>
        </tr>${gameWin ? this._getSpeedBonus(gameResult.fast) + this._getLivesBonus(result.lifes) +
        this._getSlownessPenalty(gameResult.slow) : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${gameWin ? gameResult.total : ``}</td>
        </tr>
      </table>`;
  }
  _getSpeedBonus(fast) {
    return `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${fast} <span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× ${Points.FAST}</td>
          <td class="result__total">${fast * Points.FAST}</td>
        </tr>`;
  }
  _getLivesBonus(lifes) {
    return `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${lifes} <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× ${Points.FAST}</td>
          <td class="result__total">${lifes * Points.FAST}</td>
        </tr>`;
  }
  _getSlownessPenalty(slow) {
    return `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${slow} <span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× ${Points.SLOW}</td>
          <td class="result__total">-${slow * Points.SLOW}</td>
        </tr>`;
  }
}
