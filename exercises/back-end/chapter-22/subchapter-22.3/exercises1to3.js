function exercises1to3(number) {
  if (number < 0) {
    return 'negative';
  }

  if (number === 0) {
    return 'neutral';
  }

  if (number > 0) {
    return 'positive';
  }
}

module.exports = {
  exercises1to3,
}
