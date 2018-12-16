import {gameList, INITIAL_STATE} from './game-data.js';
import buttonHandler from './button-handler.js';
import headerTemplate from './header.js';
import {renderElement} from './utilits.js';
import {changeQuestion} from './utilits.js';
import {continueGame} from './utilits.js';
import {reduceLifes} from './utilits.js';
import renderScreen from './render-screen.js';
import GameOneView from './game-1.js';
import GameTwoView from './game-2.js';
import GameThreeView from './game-3.js';
import WinScreen from './results-win.js';
import FailScreen from './results-fail.js';

const screenContainer = document.querySelector(`#main`);
const results = [];

const renderGameScreen = (state) => {
  const answersList = gameList.length;
  let currentAnswerNumber = parseInt(game.question, 10);
  let gameType = gameList[state.question].questionType;
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
      questionView = new GameOneView(gameList[state.question], results, answersList);
      break;

    case `2-img`:
      questionView = new GameTwoView(gameList[state.question], results, answersList);
      break;

    case `3-img`:
      questionView = new GameThreeView(gameList[state.question], results, answersList);
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
