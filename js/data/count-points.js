const RIGHT_ANSWER = 100;
const LIFES = 50;
const FAST = 50;
const SLOW = 50;


const countPoints = (answers, lifes) => {
  const pointsPerLife = lifes * LIFES;
  const pointsPerRightAnswer = answers.length * RIGHT_ANSWER;
  let total = 0;

  if ((lifes < 0) || (lifes > 3) || (typeof lifes !== `number`)) {
    return -1;
  } else if (!Array.isArray(answers)) {
    throw new Error(`answers should be an array`);
  } else {

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

    total += pointsPerLife + pointsPerRightAnswer;

    // const count = Object.assign({}, answer, lifes);

    return (total);
  }
};


export default countPoints; // https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export
