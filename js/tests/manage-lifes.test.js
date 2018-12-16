import {assert} from 'chai';
import {manageLifes} from '../data/manage-lifes.js';

describe(`Check lifes  `, () => {

  it(`should have 0 lifes at min`, () => {
    assert.equal(manageLifes(0), 0);
  });

  it(`should descrease lifes by 1`, () => {
    assert.equal(manageLifes(3), 2);
  });

  it(`should not allow set non number`, () => {
    assert.throws(() => manageLifes(`abc`), /lifes should be a number/);
  });
});
