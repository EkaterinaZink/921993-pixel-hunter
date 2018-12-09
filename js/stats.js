import {SCREEN_COUNT, AnswerTime} from "./game-data";

const answerState = {
  UNKNOWN: `unknown`,
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`
};

const countPoints = (answer) => {
  if (!answer) {
    return answerState.WRONG;
  } else {
    if (answer.time <= AnswerTime.MIN) {
      return answerState.FAST;
    } else if (answer.time >= AnswerTime.NORM) {
      return answerState.SLOW;
    } else {
      return answerState.CORRECT;
    }
  }
};

const getArrayState = (answers) => {
  let arrayState = [];
  for (let i = 0; i < SCREEN_COUNT; i++) {
    arrayState.push(
        `<li class="stats__result stats__result--
        ${countPoints(answers[i])}" />`
    );
  }
  return arrayState;
};

export const statsScreen = (answers) => `<ul class="stats">
${getArrayState(answers).join(``)}</ul>`;
