function isDivisbleByN(arr, n) {
  let myArr = [];
  let count = arr.length;

  for (let i = 0; i < count; i++) {
    if (arr[i] % n === 0) {
      myArr.push(arr[i]);
    }
  }
  return myArr;
}

module.exports = isDivisbleByN;
