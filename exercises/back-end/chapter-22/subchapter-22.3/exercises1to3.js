function exercises1to3(number) {
  if (typeof number !== 'number') {
    return 'The value must be a number!';
  }

  if (number < 0) {
    return 'Negative';
  }

  if (number === 0) {
    return 'Neutral';
  }

  if (number > 0) {
    return 'Positive';
  }
}

module.exports = {
  exercises1to3,
}
