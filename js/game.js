import {createDomElement, renderScreen} from './utilits.js';
import {renderResults} from './results';
import {AnswerTime, SCREEN_COUNT, gameList} from './game-data.js';
import {renderHeader, HEADER_1} from './header.js';
import {changeLevel} from './data/change-level';
import {manageLifes} from './data/manage-lifes';
import {countPoints} from './data/count-points';
import {statsScreen} from './stats.js';


const INITIAL_STATE = Object.freeze({
  level: 0,
  lifes: 3,
  time: 30,
  answers: []
});


const markUp = (game, state) => {
  switch (game.type) {
    case 1:
      return `<section class="game">
    <p class="game__task">${game.description}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game.image[0].src}" alt="Option ${game.image[0].number}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question${game.image[0].number}" type="radio" data-id="${game.image[0].number}" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question${game.image[0].number}" type="radio" data-id="${game.image[0].number}" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${statsScreen(state.answers)}
  </section>`;
    case 2:
      return `<section class="game">
    <p class="game__task">${game.description}</p>
    <form class="game__content ">${[...game.image]
          .map((answer) => `<div class="game__option">
               <img src="${answer.src}" alt="Option ${answer.number}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${answer.number}" data-id="${answer.number}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${answer.number}" data-id="${answer.number}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
        </div>`)

          .join(``)}
    </form>
    ${statsScreen(state.answers)}
  </section>`;
    case 3:
      return `<section class="game">
    <p class="game__task">${game.description}</p>
    <form class="game__content  game__content--triple">${[...game.image]
          .map((answer) => `<div class="game__option" data-id="${answer.number}">
        <img src="${answer.src}" alt="Option ${answer.number}" width="304" height="455">
      </div>`)
          .join(``)}
    </form>
    ${statsScreen(state.answers)}
  </section>`;
  }
  throw new Error(`Тип игры не определен`);
};

let gameState;

function getCountChecked(inputList) {
  return Array.from(inputList).reduce((prev, current) => {
    if (prev.checked !== undefined) {
      prev = prev.checked ? 1 : 0;
    }
    return prev + (current.checked ? 1 : 0);
  });
}
export const gameContinue = (game) => game.lifes - 1 > 0;
export const gameOver = (game) => {
  if (!gameContinue(game)) {
    throw new Error(`Game Over`);
  }
  const lifes = game.lifes - 1;
  return Object.assign({}, game, {
    lifes
  });
};

const updateGame = (isRight) => {
  if (isRight) {
    gameState.answers.push({
      result: 1,
      time: Math.floor(Math.random() * AnswerTime.MAX)
    });
  } else {
    gameState.answers.push({result: 0});
    gameState = manageLifes(gameState);
  }
  if (gameState.lifes >= 0) {
    gameState = changeLevel(gameState, gameState.level + 1);
    if (gameState.level === SCREEN_COUNT) {
      countPoints(gameState.answers, gameState.lifes);
      renderScreen(renderResults(gameState));
    } else {
      renderScreen(renderCurrentScreen(gameState));
    }
  } else {
    gameState.lifes = 0;
    renderScreen(renderResults(gameState));
  }
};
let currentGame;
const renderCurrentScreen = (state) => {
  currentGame = gameList[state.level];
  let gameTemplate = markUp(currentGame, state);
  let gameElement = createDomElement(gameTemplate, renderHeader(HEADER_1, state));
  const optionList = gameElement.querySelectorAll(`.game__option`);
  const answersList = gameElement.querySelectorAll(`input`);

  if (currentGame.type === 1 || currentGame.type === 2) {
    let savedAnswers = new Array(optionList.length);
    answersList.forEach((input) => {
      input.addEventListener(`change`, () => {
        const foundImage = currentGame.image.find(
            (image) => +input.dataset.id === image.number
        );
        savedAnswers[input.dataset.id - 1] = input.value === foundImage.type;
        if (getCountChecked(answersList) >= optionList.length) {
          updateGame(!savedAnswers.includes(false));
        }
      });
    });
  } else if (currentGame.type === 3) {
    const optionsList = gameElement.querySelectorAll(`.game__option`);
    optionsList.forEach((option) => {
      option.addEventListener(`click`, () => {
        currentGame.image.forEach((image) => {
          if (+option.dataset.id === image.number) {
            const isRight = image.type === currentGame.rightType;
            updateGame(isRight);
          }
        });
      });
    });
  }
  return gameElement;
};

const startGame = () => {
  gameState = Object.assign({}, INITIAL_STATE);
  renderScreen(renderCurrentScreen(gameState));
};
export {markUp, startGame};
