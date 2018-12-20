import AbstractView from './abstractview.js';
import resultsTemplate from '../results-chart.js';
import {debug} from '../utilits.js';

export default class GameThreeView extends AbstractView {
  constructor(question, results, questionsList) {
    super();
    this.question = question;
    this.results = results;
    this.questionsList = questionsList;
  }

  get template() {
    const resultsChart = resultsTemplate(this.results, this.questionsList);

    return `<section class="game">
    <p class="game__task">${this.question.description}</p>
    <form class="game__content  game__content--triple">
    ${this.question.answers.map((answer, i) =>
    `<div class="game__option">
        <img src="${answer.image}" alt="Option ${i + 1}" width="304" height="455" ${debug.enable && this.question.soughtFor === answer.value ? debug.styleRight : ``}>
    </div>`).join(``)}
    </form>
    ${resultsChart}
    </section> `;
  }

  handleAnswer() { }

  bind() {
    const options = Array.from(this.element.querySelectorAll(`.game__option img`));
    options.forEach((option, i) => {
      option.addEventListener(`click`, () => {
        let isRightAnswer = this.question.answers[i].value === this.question.soughtFor;
        this.handleAnswer(isRightAnswer);
      });
    });
  }
}
