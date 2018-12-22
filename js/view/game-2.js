import AbstractView from './abstractview.js';
import resultsTemplate from '../results-chart.js';
import {debug, getCountChecked} from '../utilits.js';

export default class GameTwoView extends AbstractView {
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
    <form class="game__content">
    ${this.question.answers.map((answer, i) =>
    `<div class="game__option">
        <img src="${answer.image}" alt="Option ${i + 1}" width="705" height="455">
        <label class="game__answer  game__answer--photo" ${debug.enable && this.question.answers[0].value === `photo` ? debug.styleRight : ``}>
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint" ${debug.enable && this.question.answers[1].value === `photo` ? debug.styleWrong : ``}>
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
    </form>
    ${resultsChart}
    </section> `;
  }


  handleAnswer() { }

  bind(element) {
    super.bind(element);
    const optionList = element.querySelectorAll(`.game__option`);
    const answersList = element.querySelectorAll(`input`);
    const savedAnswers = new Array(optionList.length);

    answersList.forEach((input) => {
      input.addEventListener(`change`, () => {
        const foundPicture = this.game.pictures.find(
            (pictures) => +input.dataset.id === pictures.number
        );
        savedAnswers[input.dataset.id - 1] = input.value === foundPicture.type;
        if (getCountChecked(answersList) >= optionList.length) {
          this.onNext(!savedAnswers.includes(false));
        }
      });
    });
    this.header.bind(element);
    this.header.onBack = () => this.onBack();

  }
}
