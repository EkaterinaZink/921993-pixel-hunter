
export function changeLevel(game, level) {
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  if (level > 10) {
    throw new Error(`Game should have a max of 10 levels`);
  }
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
}
