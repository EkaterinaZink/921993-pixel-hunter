import {createDomElement} from './utilits.js';
import {renderHeader, HEADER_1} from './header.js';
import {statsScreen} from './stats.js';
import {countPoints} from "../data/count-points";
import {Points} from "./game-data";

const resultTemplate = (state) => {
  const resultPoints = countPoints(state.answers, state.lifes);
  const message = resultPoints.total === -1 ? `Поражение!` : `Победа!`;


  const markUp = `<section class="result">
    <h2 class="result__title"${message}></h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
        ${statsScreen(state.answers)}
        </td>

        <td class="result__points">
        ${resultPoints.total === -1 ? `` : `× ${Points.RIGHT_ANSWER}`}
        </td>

        <td class="result__total">
        ${resultPoints.total === -1 ? `Поражение!` : resultPoints.right * Points.RIGHT_ANSWER}
        </td>
      </tr>

      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${resultPoints.fast} <span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× ${Points.FAST}</td>
        <td class="result__total">${resultPoints.fast * Points.FAST}</td>
      </tr>

      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${state.lifes} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× ${Points.LIFES}</td>
        <td class="result__total">${state.lifes * Points.LIFES}</td>
      </tr>

      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${resultPoints.slow} <span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× ${Points.SLOW}</td>
        <td class="result__total">-${resultPoints.slow * Points.SLOW}</td>
      </tr>

      <tr>
        <td colspan="5" class="result__total  result__total--final">
        ${resultPoints.total === -1 ? `Поражение!` : resultPoints.total}</td>
      </tr>

    </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">FAIL</td>
        </tr>
      </table>

    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>
  </section> `;

  return markUp;
};

export const renderResults = (state) => {
  let results = createDomElement(
      resultTemplate(state),
      renderHeader(HEADER_1, state)
  );
  return results;
};
