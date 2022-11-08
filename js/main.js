function randNum(min, max) {
  if (min > 0 && max > 0 && !isNaN(max) && !isNaN(min)) {
    if (max < min) {
      const temp = max;
      max = min;
      min = temp;
    }
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  return NaN;
}

const lengthCheck = (str, maxLength) => str.length <= maxLength;

randNum(1, 10);
lengthCheck('js', 2);
