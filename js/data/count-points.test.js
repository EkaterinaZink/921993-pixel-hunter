import {assert} from 'chai';
import countPoints from './count-points.js';

describe(`Check points calculation`, () => {

  it(`should return 1650 points at 10 answered questions and 3 lifes left`, () => {
    assert.equal(countPoints([10, 9, 8, 9, 6, 6, 7, 8, 9, 10], 3), 1650);
  });

  it(`should return 1500 points at 10 rapidly answered questions no lifes left`, () => {
    assert.equal(countPoints([10, 9, 8, 9, 6, 6, 7, 8, 9, 10], 0), 1500);
  });

  it(`should return 800 points at 6 normally and 4 slowly answered questions no lifes left`, () => {
    assert.equal(countPoints([11, 12, 23, 14, 30, 43, 17, 18, 28, 12], 0), 800);
  });

  it(`should return 1000 points at 10 normally answered questions no lifes left`, () => {
    assert.equal(countPoints([12, 11, 12, 15, 13, 12, 17, 18, 12, 11], 0), 1000);
  });

  it(`should return 1100 points at 10 normaly answered questions 2 lifes left`, () => {
    assert.equal(countPoints([13, 11, 12, 15, 13, 12, 17, 18, 12, 11], 2), 1100);
  });


  it(`less than 10 answered questions`, () => {
    assert.equal(countPoints([11, 12, 10], 3), 500);
  });

  it(`lifes should be a positive number`, () => {
    assert.equal(countPoints([], -1), -1);
  });

  it(`number of lifes should not be more than 3`, () => {
    assert.equal(countPoints([], 4), -1);
  });

  it(`should not allow set non number for lifes`, () => {
    assert.equal(countPoints([], `abc`), -1);
  });

  it(`should not allow set non array`, () => {
    assert.throws(() => countPoints(`abc`, 3), /answers should be an array/);
  });


});
