import HeaderTemplate from "./header.js";
import Router from './router.js';
import QuestionTemplate from './question.js';

const TIME = 1000;

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderTemplate(this.model.state);
    this.question = new QuestionTemplate(this.model.getCurrentQuestion(), this.model._results, this.model.getQuestions());

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.question.element);

    this._timer = null;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.model.restartTimer();
    this.changeQuestion();
    this.header.onButtonClick = () => Router.showGreetings();
    this._timer = setInterval(() => {
      this.model.timer();
      this.updateTime(this.model.state.time);
    }, TIME);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  answer(resposta) {
    this.stopTimer();

    if (resposta) {
      this.model.addAnswer(`right`);
    } else {
      this.model.addAnswer(`wrong`);
      if (!this.model.hasLifes()) {
        return this.endGame(false);
      }
      this.model.reduceLifes();
    }
    if (this.model.continueToNext()) {
      this.model.nextQuestion();
      return this.startGame();
    } else {
      return this.endGame(true);
    }
  }

  updateTime(tempo) {
    this.header.updateTime(tempo);
  }

  updateHeader() {
    const header = new HeaderTemplate(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeQuestion() {
    this.updateHeader();
    const question = new QuestionTemplate(this.model.getCurrentQuestion(), this.model._results, this.model.getQuestions());
    question.handleAnswer = (isRightAnswer) => this.answer(isRightAnswer);
    this.changeView(question);
  }

  endGame(isWinner) {
    Router.showStats(isWinner, this.model);
  }

  changeView(view) {
    // this.root.replaceChild(view.element, this.question.element);
    this.root.innerHTML = ``;
    this.question = view;
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.question.element);
  }
}
