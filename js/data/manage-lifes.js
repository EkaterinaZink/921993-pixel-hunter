const manageLifes = (lifesNumber) => {
  if (typeof lifesNumber !== `number`) {
    throw new Error(`lifes should be a number`);
  }

  return lifesNumber <= 0 ? lifesNumber : lifesNumber - 1;
};

export default manageLifes;

