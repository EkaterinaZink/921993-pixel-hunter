import {gameQuestions, INITIAL_STATE} from './game-data.js';
import {changeQuestion, timer, reduceLifes, restartTimer} from './utilits.js';

const questionsList = gameQuestions.length;
const getQuestion = (state) => gameQuestions[state.question];
const getAnswerNumber = (state) => parseInt(state.question, 10);

export default class GameModel {
  constructor(player) {
    this.player = player;
    this.restart();
    this._results = [];
  }

  get state() {
    return this._state;
  }

  get results() {
    return this._results;
  }

  continueToNext() {
    return getAnswerNumber(this._state) + 1 < questionsList;
  }

  hasLifes() {
    return this._state.lifes > 0;
  }

  getQuestions() {
    return questionsList;
  }

  getCurrentQuestion() {
    return getQuestion(this._state);
  }

  getQuestionsNumber() {
    return this.data.length;
  }

  restartTimer() {
    this._state = restartTimer(this._state);
  }

  reduceLifes() {
    this._state = reduceLifes(this._state);
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  nextQuestion() {
    this._state = changeQuestion(this._state, this.state.question + 1);
  }

  addAnswer(result) {
    this._results.push(result);
  }

  timer() {
    this._state = timer(this._state);
  }
}
