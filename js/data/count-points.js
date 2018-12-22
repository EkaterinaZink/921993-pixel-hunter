const Points = {
  RIGHT_ANSWER: 100,
  LIFES: 50,
  FAST: 50,
  SLOW: 50,
};

const AnswerTime = {
  MIN: 10,
  NORM: 20,
  MAX: 30
};

const MIN_ANSWER = 7;

const getRightAnswer = (answers) => {
  return answers.filter((answer) => answer.result === 1);
};

const calcAnswerPoints = (time) => {
  let point = Points.RIGHT_ANSWER;
  if (time <= AnswerTime.MIN) {
    point += Points.FAST;
  } else if (time >= AnswerTime.NORM) {
    point -= Points.SLOW;
  }
  return point;
};

const pointsPerLife = (lifes) => lifes * Points.LIFES;

export const countPoints = (answers, lifes) => {
  if (lifes < 0) {
    lifes = 0;
  }

  if ((lifes < 0) || (lifes > 3) || (typeof lifes !== `number`)) {
    return -1;
  } else if (!Array.isArray(answers)) {
    throw new Error(`answers should be an array`);
  }

  const rightAnswersArray = getRightAnswer(answers);

  let fastAnswersCount = 0;
  let slowAnswersCount = 0;
  let total = 0;

  if (rightAnswersArray.length >= MIN_ANSWER) {
    for (let answer of rightAnswersArray) {
      total += calcAnswerPoints(answer.time);
      if (answer.time <= AnswerTime.MIN) {
        fastAnswersCount++;
      } else if (answer.time >= AnswerTime.NORM) {
        slowAnswersCount++;
      }
    }
    total += pointsPerLife(lifes);
  } else {
    total = -1;
  }

  return {
    right: rightAnswersArray.length,
    fast: fastAnswersCount,
    slow: slowAnswersCount,
    total
  };
};

