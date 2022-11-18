function randNum(a, b) {
  if (a >= 0 && b >= 0 && !isNaN(a) && !isNaN(b)) {
    const lower = Math.ceil(Math.min(a,b));
    const upper = Math.floor(Math.max(a,b));
    const result = Math.random() * (upper + 1 - lower) + lower;
    return Math.floor(result);
  }

  return NaN;
}

const lengthCheck = (str, maxLength) => str.length <= maxLength;

const photo = Array(25).fill(undefined).map(() => ({ id: randNum(1, 25), url: `photos/${ randNum(1, 5) }.jpg`,
  desciption: 'Ам ням', likes: randNum(15, 200), comments: randNum(0, 200) }));
