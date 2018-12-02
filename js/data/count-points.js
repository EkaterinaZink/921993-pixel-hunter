const RIGHT_ANSWER = 100;
const LIFES = 50;

const countPoints = (answers, lifes) => {
  const pointsPerLife = lifes * LIFES;
  const pointsPerRightAnswer = answers.length * RIGHT_ANSWER;

  if (!Array.isArray(answers)) {
    throw new Error(`answers should be an array`);
  }
  if (typeof lifes !== `number`) {
    throw new Error(`lifes should be a number`);
  }
  if (typeof lifes < 0) {
    throw new Error(`Lifes should be a positive number`);
  }
  if (typeof lifes > 3) {
    throw new Error(`Number of lifes should not be more than 3`);
  }

  const answer = answers.length < 10 ? -1 : pointsPerLife + pointsPerRightAnswer;

  const count = Object.assign({}, answer, {
    lifes
  });
  return count;
};

export default countPoints; // https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export
