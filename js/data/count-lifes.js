const RIGHT_ANSWER = 100;
const LIFES = 50;
const FAST = 50;
const SLOW = 50;


const countPoints = (answers, lifes) => {
  const pointsPerLife = lifes * LIFES;
  const pointsPerRightAnswer = answers.length * RIGHT_ANSWER;
  let total = 0;

  answers.forEach((answer) => {

    // total += RIGHT_ANSWER;
    if (answer <= 10) {
      total += FAST;
    }
    if (answer >= 20) {
      total -= SLOW;
    }
    // return total;
  });

  if (!Array.isArray(answers)) {
    throw new Error(`answers should be an array`);
  }
  if (typeof lifes !== `number`) {
    throw new Error(`lifes should be a number`);
  }
  if (typeof pointsPerLife < 0) {
    return -1;
  }
  if (typeof lifes > 3) {
    return -1;
  }

  total += pointsPerLife + pointsPerRightAnswer;

  // const count = Object.assign({}, answer, lifes);

  return (total);
};


export default countPoints; // https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export
