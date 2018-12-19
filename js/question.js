import AbstractView from './view/abstractview.js';
import GameOneView from './view/game-1.js';
import GameTwoView from './view/game-1.js';
import GameThreeView from './view/game-1.js';

export default class QuestionTemplate extends AbstractView {
  constructor(question, results, questionsList) {
    super();
    this.question = question;
    this.results = results;
    this.questionsList = questionsList;
    this.view = null;
  }

  handleAnswer() { }

  get element() {
    switch (this.question.type) {
      case `1-img`:
        this.view = new GameOneView(this.question, this.results, this.questionsList);
        break;

      case `2-img`:
        this.view = new GameTwoView(this.question, this.results, this.questionsList);
        break;

      case `3-img`:
        this.view = new GameThreeView(this.question, this.results, this.questionsList);
        break;
    }

    this.view.handleAnswer = this.handleAnswer;

    if (this._element) {
      return this._element;
    }

    this._element = this.view.element;
    return this._element;
  }
}

