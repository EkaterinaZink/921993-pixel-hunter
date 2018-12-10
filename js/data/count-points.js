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


const getRightAnswer = (answers) => {
  return answers.filter((answer) => answer.result === 1);
};

export const countPoints = (answers, lifes) => {
  const pointsPerLife = lifes * Points.LIFES;
  const pointsPerRightAnswer = answers.length * Points.RIGHT_ANSWER;
  let total = 0;

  if ((lifes < 0) || (lifes > 3) || (typeof lifes !== `number`)) {
    return -1;
  } else if (!Array.isArray(answers)) {
    throw new Error(`answers should be an array`);
  } else {

    answers.forEach((answer) => {
      if (answer <= AnswerTime.MIN) {
        total += Points.FAST;
      }
      if (answer >= AnswerTime.NORM) {
        total -= Points.SLOW;
      }
    });
    total += pointsPerLife + pointsPerRightAnswer;

    let rightAnswers = getRightAnswer(answers);
    const fastAnswers = rightAnswers.filter(
        (answer) => answer.time <= AnswerTime.MIN
    );
    const slowAnswers = rightAnswers.filter(
        (answer) => answer.time >= AnswerTime.NORM
    );

    return {
      right: rightAnswers.length,
      fast: fastAnswers.length,
      slow: slowAnswers.length,
      total
    };
  }
};
