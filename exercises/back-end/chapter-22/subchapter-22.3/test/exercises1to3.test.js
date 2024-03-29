const { exercises1to3 } = require('../exercises1to3');
const { expect } = require('chai');

describe('Exercises 1 to 3', () => {
  it('If the number is greater than 0 it must return "positive"', () => {
    const answer = exercises1to3(10);

    expect(answer).to.be.equal('Positive');
  });

  it('If the number is less than 0 it must return "negative"', () => {
    const answer = exercises1to3(-5);

    expect(answer).to.be.equal('Negative');
  });

  it('If the number is equal to 0 it must return "neutral"', () => {
    const answer = exercises1to3(0);

    expect(answer).to.be.equal('Neutral');
  });

  it('If the value is not a number the function must inform so', () => {
    const answer = exercises1to3('42');

    expect(answer).to.be.equal('The value must be a number!');
  });
});
