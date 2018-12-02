import {assert} from 'chai';
import countPoints from './count-points.js';

describe(`Check points calculation`, () => {

  it(`should return 1150 points at 10 answered questions and 3 lifes left`, () => {
    assert.equal(countPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 1150);
  });

  it(`less than 10 answered questions`, () => {
    assert.equal(countPoints([1, 2, 3], 3), -1);
  });

  it(`lifes should be a positive number test`, () => {
    assert.equal(countPoints([], -1), -1);
  });

  it(`number of lifes should not be more than 3`, () => {
    assert.equal(countPoints([], 4), -1);
  });

  it(`should not allow set non array`, () => {
    assert.throws(() => countPoints(`abc`, 3), /answers should be an array/);
  });

  it(`should not allow set non number for lifes`, () => {
    assert.throws(() => countPoints([], `abc`), /lifes should be a number/);
  });

});
