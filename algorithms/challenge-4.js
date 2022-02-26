function highestSum(x, y) {
  let sumX = 0;
  let sumY = 0;

  for (let i = 0; i < x.length; i++) {
    sumX += x[i];
  }
  for (let j = 0; j < y.length; j++) {
    sumY += y[j];
  }
  if (sumY > sumX) {
    sumX = sumY;
  }
  return sumX;
}

module.exports = highestSum;
