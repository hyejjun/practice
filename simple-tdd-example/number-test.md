# Jest를 이용한 간단한 TDD 예제

## 문제 이해하기

“두 개 뽑아서 더하기” 문제의 입력과 출력을 확인합니다.

입력: 숫자 목록
출력: 입력된 숫자 목록에서 두 개를 뽑아서 더한 값을 모아 중복을 제거하고 정렬한 숫자 목록

-> 각 입력값들의 합을 낸 뒤에 중복값을 제거함

---
실패하는 테스트 먼저 작성해서 함수를 확인함

```js
 test('simple', () => {
  expect(1 + 1).toBe(1);
 });
```

실패하는걸 확인했으면 동작하도록 고쳐서 테스트 통과시킴

```js
test('simple', () => {
  expect(1 + 1).toBe(2);
});
```

예제를 입력하면서 인터페이스(또는 시그니처)를 결정함
-> 요거는 예제를 통해 `시그니처: [A 함수를 사용하면 ~ 어떤 결과 값이 나올거야]`를 결정해주는것.
이런 시그니처를 모아 만든것이 인터페이스 이다.

```js
test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
```

처음에 solve 함수에 대한 선언 없이 일단 이렇게 쓰면
`ReferenceError: solve is not defined` 이런 에러가 나온다.

```js
function solve() {
  // TODO...
}

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
```

그 다음에 solve 함수가 아무것도 리턴하지 않으면 (구현된 부분이 없으면)

```plain
Expected: [2, 3, 4, 5, 6, 7]
Received: undefined
```

기대값과 실제값이 다르다는 에러가 난다.

```js
function solve() {
  return [2, 3, 4, 5, 6, 7];
}

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
```

재빠르게 통과시키기
solve 함수에 기대값을 리턴하는 부분을 구현해준다.
`return [2, 3, 4, 5, 6, 7];`

---

### 중복 발견

```js
function solve() {
  return [1 + 1, 3, 4, 5, 6, 7];
}

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
```

앞에 2가 사실 1+1 이였음

-> 이게 뭔소릴까?? 이게 왜 중복 찾기인지 모르겠음.

```js
function solve(numbers) {
  return [numbers[1] + numbers[4], 3, 4, 5, 6, 7];
}

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
```

입력값 배열에 첫번째와 네번째 인자값인 1과 1로 대체함

-> 뭘까 진짜???

---

### 간단한 테스트 케이스

입력을 `[1, 2]`로, 출력을 `[3]`으로 기대해 봅시다.

```js
function solve(numbers) {
  return [numbers[1] + numbers[4], 3, 4, 5, 6, 7];
}

test('simple', () => {
  expect(solve([1, 2])).toEqual([3]);
});

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});
```

테스트가 실패함

빠르게 통과 시키기 위해 입력값의 크기 (length)를 이용한다.

```js
function solve(numbers) {
  if (numbers.length === 2) {
    return [3];
  }
  return [numbers[1] + numbers[4], 3, 4, 5, 6, 7];
}

test('simple', () => {
  expect(solve([1, 2])).toEqual([3]);
});

test('sample', () => {
  expect(solve([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});

```

재빠르게 통과함

입력값의 길이가 2인 경우 [3]을 리턴한다.

통과 했으니 이제 의미를 드러낸다.

```js
return [1 + 2];
```

이렇게 바꾸면서 의미를 드러냄

테스트가 통과하면 다시 고치기

```js
return [numbers[0] + numbers[1]];
```

---

### 더 나아가기

`[1, 2, 3]`을 넣어 `[3, 4, 5]`가 나오게 합시다.

```js
function solve(numbers) {
  if (numbers.length === 2) {
    return [numbers[0] + numbers[1]];
  }
  if (numbers.length === 3) {
    return [3, 4, 5];
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

```

if 문 - length === 3 일때 부분을 추가하고

테스트 중에 `expect(solve([1, 2, 3])).toEqual([3, 4, 5]);` 를 추가했다.

빠르게 통과된다.

의도를 드러내면서 통과해보자

```js
  if (numbers.length === 3) {
    return [1 + 2, 1 + 3, 2 + 3];
  }
```

통과함

다시 의도를 더 드러냄

```js
  if (numbers.length === 3) {
    return [
      numbers[0] + numbers[1],
      numbers[0] + numbers[2],
      numbers[1] + numbers[2],
    ];
  }
```

---

### 조금 더 어려운 중복 찾기

```js
numbers[0] + numbers[1]
```

이 부분이

```js
solve(numbers[0] + numbers[1])
```

와 같음.

이 부분을 재귀로 바꿔보자.

```js
function solve(numbers) {
  if (numbers.length === 2) {
    return [numbers[0] + numbers[1]];
  }
  if (numbers.length === 3) {
    return [
      ...solve(numbers.slice(0, 2)),
      numbers[0] + numbers[2],
      numbers[1] + numbers[2],
    ];
  }
  return [numbers[1] + numbers[4], 3, 4, 5, 6, 7];
}
```

바꿈..

또 찾아서 또 바꿈

```js
  if (numbers.length === 3) {
    return [
      ...solve(numbers.slice(0, 2)),
      ...solve([...numbers.slice(0, 1), ...numbers.slice(2)]),
      ...solve(numbers.slice(1, 3)),
    ];
  }
```

slice
첫번째 인자로 넘어온 시작 인덱스가 가리키는 값은 포함하지만, 두번째 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않는다는 것입니다.

두번째 인자를 넘기지 않으면, 시작 인덱스가 가리키는 값부터 배열의 마지막 값까지 모두 복사해줍니다.

```js
  if (numbers.length === 3) {
    return [
      ...solve([...numbers.slice(0, 2), ...numbers.slice(3)]),
      ...solve([...numbers.slice(0, 1), ...numbers.slice(2)]),
      ...solve([...numbers.slice(0, 0), ...numbers.slice(1)]),
    ];
  }
```

이런 패턴을 찾았다.. 바꿔준다.

순서가 역순으로 되어있어서 바꿔준다.

```js
  if (numbers.length === 3) {
    return [
      ...solve([...numbers.slice(0, 0), ...numbers.slice(1)]),
      ...solve([...numbers.slice(0, 1), ...numbers.slice(2)]),
      ...solve([...numbers.slice(0, 2), ...numbers.slice(3)]),
    ];
  }
```

예상 결과 : [3, 4, 5]

실제 결과 : [5, 4, 3]

이렇게 되어서 테스트가 틀렸다고 나옴.

순서를 정렬해준다.

```js
  if (numbers.length === 3) {
    return [
      ...solve([...numbers.slice(0, 0), ...numbers.slice(1)]),
      ...solve([...numbers.slice(0, 1), ...numbers.slice(2)]),
      ...solve([...numbers.slice(0, 2), ...numbers.slice(3)]),
    ].sort((a, b) => a - b);
  }
```

`sort` 정렬을 이용해서 순서를 바꿔준다.

이렇게 하면 테스트가 통과된다.

### Array.sort 정렬

```js
const words = ['dream', 'banana', 'club', 'apple'];
words.sort();
// Expected output:  Array ["apple", "banana", "club", "dream"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// Expected output: Array [1, 100000, 21, 30, 4]
```

그냥 sort()라고 쓰면 문자열 정렬이 된다!

- 유니코드 순서에 따라서 오름차순으로 정렬

우리는 숫자를 오름차순으로 정렬하고 싶기 때문에 파라미터(compareFunction)를 활용해야한다.

```js
// 오름차순 sort
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);

// Expected output : Array [1, 4, 21, 30, 100000]
```

만약 내림차순이라면?

```js
// 내림차순 sort
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => b - a);

// Expected output : Array [100000, 30, 21, 4, 1]
```

---

### 패턴찾기

0~2로 반복되는 패턴이 보인다.

map으로 정리 해보자.

