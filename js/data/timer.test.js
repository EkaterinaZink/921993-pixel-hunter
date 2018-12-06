import {assert} from 'chai';
import timer from './timer.js';

describe(`Check timer`, () => {

  it(`min value should be 0`, () => {
    assert.equal(timer(0), `time is over`);
  });

  it(`should descrease time by one second`, () => {
    assert.equal(timer(3), 2);
  });

  it(`should not allow set non number`, () => {
    assert.throws(() => timer(`abc`), /timer should be a number/);
  });
});
