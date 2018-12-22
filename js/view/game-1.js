import AbstractView from './abstractview.js';
import resultsTemplate from '../results-chart.js';
import {debug} from '../utilits.js';

// import GameView from './game-view.js';

export default class GameOneView extends AbstractView {
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
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${this.question.answers[0].image}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo" ${debug.enable && this.question.answers[0].value === `photo` ? debug.styleRight : ``}>
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint" ${debug.enable && this.question.answers[0].value === `photo` ? debug.styleWrong : ``}>
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${resultsChart}
    </section> `;
  }

  handleAnswer() { }

  bind() {
    const formElement = this.element.querySelector(`.game__content`);
    const options = Array.from(formElement.querySelectorAll(`input`));
    options.forEach((option) => {
      option.addEventListener(`change`, () => {
        const selectedOption = option.value;
        const rightAnswer = this.question.answers[0].value;
        const isRightAnswer = selectedOption === rightAnswer;
        this.handleAnswer(isRightAnswer);
      });
    });
  }
}
