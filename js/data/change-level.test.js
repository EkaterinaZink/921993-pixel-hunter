import {assert} from 'chai';
import {changeLevel} from './change-level.js';

const INITIAL_GAME = Object.freeze({
  level: 0,
  lifes: 2,
  time: 0
});

describe(`Check level changer`, () => {

  it(`should update level of the game`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 2).level, 2);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);

  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, /Level should not be negative value/);
  });
  it(`should not have more than 10 levels`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, 11).level, /Game should have a max of 10 levels/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, []).level, /Level should be of type number/);
  });

});
