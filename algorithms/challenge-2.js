function divisible(a) {
  let result = 0;
  let division = a.length;

  for (let i = 0; i < division; i++) {
    if (a[i] > 15 && a[i] % 2 === 0) {
      result += 1;
    }
  }

  return result;
}

module.exports = divisible;
