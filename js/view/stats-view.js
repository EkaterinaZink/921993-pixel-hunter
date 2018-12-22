import {AnswerTime} from "../data/count-points.js";
import AbstractView from "./abstractview";


const AnswerModifier = {
  UNKNOWN_ANSWER: `unknown`,
  RIGHT_ANSWER: `correct`,
  FAST_ANSWER: `fast`,
  SLOW_ANSWER: `slow`,
  WRONG_ANSWER: `wrong`
};

const GAME_COUNT = 10;

export default class StatsView extends AbstractView {
  constructor(answers) {
    super();
    this.answers = answers;
  }

  get template() {
    return this._renderStatsList();
  }

  _renderStatsList() {
    return `<ul class="stats">
    ${this._getArrayStats(this.answers).join(``)}
    </ul>`;
  }

  _calculateStatus(answer) {
    if (!answer) {
      return AnswerModifier.UNKNOWN_ANSWER;
    }
    if (answer.result === 0) {
      return AnswerModifier.WRONG_ANSWER;
    } else {
      if (answer.time <= AnswerTime.MIN) {
        return AnswerModifier.FAST_ANSWER;
      } else if (answer.time >= AnswerTime.NORM) {
        return AnswerModifier.SLOW_ANSWER;
      } else {
        return AnswerModifier.RIGHT_ANSWER;
      }
    }
  }
  _getArrayStats() {
    const statsArray = [];
    for (let i = 0; i < GAME_COUNT; i++) {
      statsArray.push(
          `<li class="stats__result stats__result--${this._calculateStatus(
              this.answers[i]
          )}" />`
      );
    }
    return statsArray;
  }
}
