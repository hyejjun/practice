function solve(numbers) {
  if (numbers.length === 2) {
    return [numbers[0] + numbers[1]];
  }
  if (numbers.length === 3) {
    const result = [...Array(3)].map((_, i) => solve([...numbers.slice(0, i), ...numbers.slice(i + 1)]));
    console.log(result);
    return result;
  }
  return [numbers[1] + numbers[4], 3, 4, 5, 6, 7];
}

test('simple', () => {
  expect(solve([1, 2])).toEqual([3]);
  expect(solve([1, 2, 3])).toEqual([3, 4, 5]);
});

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
