export const manageLifes = (lifesNumber) => {
  if (typeof lifesNumber !== `number`) {
    throw new Error(`lifes should be a number`);
  }
  let lifes = lifesNumber <= 0 ? lifesNumber : lifesNumber - 1;

  return lifes;
};

