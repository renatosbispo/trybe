const { exercises1to3 } = require('../exercises1to3');
const { expect } = require('chai');

describe('Exercise 1', () => {
  it('If the number is greater than 0 it must return "positive"', () => {
    const answer = exercises1to3(10);

    expect(answer).to.be.equal('positive');
  });

  it('If the number is less than 0 it must return "negative"', () => {
    const answer = exercises1to3(-5);

    expect(answer).to.be.equal('negative');
  });

  it('If the number is equal to 0 it must return "neutral"', () => {
    const answer = exercises1to3(0);

    expect(answer).to.be.equal('neutral');
  });
});
