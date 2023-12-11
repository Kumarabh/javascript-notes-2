const memoizeDouble = () => {
  const cache = {};

  return (value: number) => {
    if(value in cache) {
      console.log('memoized result');
      return cache[value];
    } else {
      console.log('computing ...')
      const result = value * 2;
      cache[value] = result;
      return result;
    }
  }
}

const memoizeDoubleFn = memoizeDouble();
console.log(memoizeDoubleFn(100));
console.log(memoizeDoubleFn(100));
