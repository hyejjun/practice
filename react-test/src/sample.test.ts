function add(...numbers:number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((acc, number) => acc + number);

  // return add(...numbers.slice(0, numbers.length - 1)) + numbers[numbers.length - 1];
}

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

describe('add 함수는', () => {
  it('두 숫자의 합을 리턴한다', () => {
    expect(add(1, 2)).toBe(3);
  });
});

const context = describe;

describe('add', () => {
  context('with no argument', () => {
    it('returns zero', () => {
      expect(add()).toBe(0);
    });
  });

  context('with only one argument', () => {
    it('returns the same number', () => {
      expect(add(1)).toBe(1);
    });
  });

  context('with two arguments', () => {
    it('returns sum of two number', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  context('with three arguments', () => {
    it('returns sum of three number', () => {
      expect(add(1, 2, 3)).toBe(6);
    });
  });

  context('with ten arguments', () => {
    it('returns sum of ten number', () => {
      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
    });
  });
});
