import AbstractView from './abstractview.js';
import resultsTemplate from '../results-chart.js';

export default class GameTwoView extends AbstractView {
  constructor(question, results, answersQuantity) {
    super();
    this.question = question;
    this.results = results;
    this.answersQuantity = answersQuantity;
  }

  get template() {
    const resultsChart = resultsTemplate(this.results, this.answersQuantity);

    return `<section class="game">
    <p class="game__task">${this.question.description}</p>
    <form class="game__content">
    ${this.question.answers.map((answer, i) =>
    `<div class="game__option">
        <img src="${answer.image}" alt="Option ${i + 1}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
    </form>
    ${resultsChart}
    </section> `;
  }


  handleAnswer() { }

  bind() {
    const formElement = this.element.querySelector(`game__content`);
    const questionsWrappers = Array.from(formElement.querySelectorAll(`.game__option`));
    const imagesToAnswer = questionsWrappers.length;
    let answersRightPartial = 0;
    let isRightAnswer;

    questionsWrappers.forEach((wrapper, i) => {
      const options = wrapper.querySelectorAll(`input[name="question${i + 1}"]`);
      options.forEach((option) => {
        option.addEventListener(`change`, () => {
          if (option.value === this.question.answers[i].value) {
            answersRightPartial++;
          } else {
            answersRightPartial--;
          }
          isRightAnswer = answersRightPartial === imagesToAnswer;
        });
      });
    });

    const formElementChangeHandler = () => {
      const allOptions = Array.from(formElement.querySelectorAll(`input[type="radio"]`));
      const answers = allOptions.filter((input) => input.checked);
      if (answers.length === imagesToAnswer) {
        this.handleAnswer(isRightAnswer);
      }
    };
    formElement.addEventListener(`change`, formElementChangeHandler);
  }
}
