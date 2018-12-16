import {gameQuestions, INITIAL_STATE} from './game-data.js';
import buttonHandler from './button-handler.js';
import headerTemplate from './header.js';
import {renderElement} from './utilits.js';
import {changeQuestion} from './utilits.js';
import {continueGame} from './utilits.js';
import {reduceLifes} from './utilits.js';
import renderScreen from './render-screen.js';
import GameOneView from './view/game-1.js';
import GameTwoView from './view/game-2.js';
import GameThreeView from './view/game-3.js';
import WinScreen from './view/results-win.js';
import FailScreen from './view/results-fail.js';

const screenContainer = document.querySelector(`#main`);
const results = [];

const renderGameScreen = (state) => {
  const answersList = gameQuestions.length;
  let currentAnswerNumber = parseInt(game.question, 10);
  let gameType = gameQuestions[state.question].type;
  let questionView;

  const winScreen = new WinScreen(results, game.lifes, answersList);
  const failScreen = new FailScreen(results, answersList);

  const continueToNext = () => {
    currentAnswerNumber++;
    if (currentAnswerNumber < answersList) {
      game = changeQuestion(game, currentAnswerNumber);
      renderGameScreen(game);
    } else {
      renderScreen(winScreen.element);
    }
  };

  const handleAnswer = (isRight) => {
    if (isRight) {
      results.push(`right`);
      continueToNext();
    } else {
      results.push(`wrong`);
      if (!continueGame(game)) {
        renderScreen(failScreen.element);
        return;
      }
      game = reduceLifes(game);
      continueToNext();
    }
  };

  switch (gameType) {
    case `1-img`:
      questionView = new GameOneView(gameQuestions[state.question], results, answersList);
      break;

    case `2-img`:
      questionView = new GameTwoView(gameQuestions[state.question], results, answersList);
      break;

    case `3-img`:
      questionView = new GameThreeView(gameQuestions[state.question], results, answersList);
      break;
  }
  screenContainer.innerHTML = ``;
  questionView.handleAnswer = (isRightAnswer) => handleAnswer(isRightAnswer);
  screenContainer.appendChild(renderElement(headerTemplate(state)));
  screenContainer.appendChild(questionView.element);
  buttonHandler();
};

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_STATE);
  renderGameScreen(game);
};

export default startGame;
