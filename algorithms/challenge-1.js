function noOfElements(x, y, z) {
  let count = 0;
  x.forEach((item) => {
    if (item >= y && item <= z) {
      count++;
    }
  });
  return count;
}

module.exports = noOfElements;
