- 현재 repo 주소: https://github.com/paullabkorea/Algorithm-walk-with-wenivs
- 이력서 템플릿: https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4

# 1. 자료구조와 알고리즘, 코딩테스트

- 자료구조(자료를 어떻게 담는가?): array, object, map, set, 싱글 링크드 리스트, 더블 링크드 리스트, 트리, 해쉬 등
- 알고리즘(문제를 어떻게 풀 것인가?): 애라토스테네스의 체, 그리디 알고리즘, 투 포인터, 슬라이딩 윈도우 등
- 자료구조 + 알고리즘 => 문제 풀이 능력을 보겠다! => 코딩테스트
- 추천 서적
  - 학문적 접근: The Art of Computer Programming(도널드 커누스)
  - 코딩테스트 접근: 파이썬 알고리즘 인터뷰(박상길)
  - 자바스크립트 코딩 테스트 책: 코딩 테스트 합격자 되기 - 자바스크립트 편
- 요즘은 ChatGPT가 이러한 책의 역할을 하고 있습니다. 그래서 https://100.jsalgo.co.kr/ 와 같은 곳에서 문제를 풀어보시면서 자료구조와 알고리즘을 설명해달라고 ChatGPT에게 요청하시면서 공부하시는 방법이 더 효율적입니다.

## 1.1 코테 전 준비사항

0. 회사와 경향 분석!
   - 코테 보는 회사와 회사 유형을 정리하세요.
   - [코딩테스트 경향 정리](https://paullabworkspace.notion.site/446d03bf38df42e19d9fedcf5ceaec61?pvs=4) 해두었습니다.
   - 분석 서비스를 통해 [출제 경향](https://algoview.co.kr/)도 한 번 정리하세요.
1. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
   - 사용 가능 라이브러리 미리 확인 등
   - 대부분 numpy나 pandas가 사용 가능하지만 간혹가다 라이브러리 제한이 있는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다. 순열과 조합은 itertools를 사용하시면 python 아주 쉽게 풀 수 있습니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
   - 요즘은 Lv이 높은 경우가 아니면 속도 체크를 거의 하지 않는 추세입니다.
   - 다른 언어가 메인이셔도 Python 추천 드립니다. 코딩테스트만을 위해 Python을 새로 공부하시는 분들이 많습니다.
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
   - 코드 스니펫을 만들어둔 레파지토리 fork - [제주코딩베이스캠프](https://github.com/paullabkorea/programmersLv0)
   - 감독관이 없는 경우 [스니펫](https://github.com/paullabkorea/programmersLv0/blob/main/Solution.md)에서 Ctrl + F해서 문제를 풉니다.
   - 시험 전 스니펫을 만들지 말고 하루 한 문제씩(저도 매일 한 문제씩 풉니다.) 또는 버겁다면 일주일에 2 ~ 3문제.
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, re, bisect, math 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
   - 유용한 알고리즘 GitHub repo를 검색하고 fork를 떠두는 것도 좋습니다.
   - 면접질문 repo등 다양한 목적에 repo가 있습니다.
5. 기억해두자! 예외처리!
   - 예외처리와 테스트 케이스중 통과 못하는 케이스들은 문제를 많이 풀어보셔야 합니다.
   - 길이가 0이거나 0으로 나누거나 등
6. 속도개선
   - class로 구현
   - 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
   - for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
   - 재귀는 느립니다. 최후의 수단으로 사용하세요.
7. ChatGPT, Copilot 활용
   - 감독관이 없고 검색이 가능하다면 ChatGPT를 활용하세요.(ChatGPT가 활용 불가인 코테도 있습니다. 다만 활용 불가인데 검색이 가능할 경우 형평성 문제가 생겨요.)
   - ChatGPT 나오고 화이트보드 테스트가 많아졌습니다.

## 1.2 문제 유형과 출제 방식

- 5 ~ 6시간, 6 ~ 7문제
  - 구현 테스트의 경우, 짧으면 1일, 길면 4 ~ 5일 주는 경우도 있다
- 30분씩 4문제, 2시간씩 2문제
- 2 ~ 3시간, 3 ~ 5문제
- 30분씩 3 ~ 4문제, 변별력 1문제
- 단기 공부로 붙을 수 있는 코테와 붙기 힘든 코테 경향 정리
- 문제 유형 분석 관련 글
  - [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
  - [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
  - [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
    - 요구사항 구현 알고리즘(33%)
    - 그리디 알고리즘(20%)
    - 너비우선탐색, 깊이우선탐색(20%)
    - 정렬(8%)
    - 다이나믹 프로그래밍, 최단경로, 이진 탐색 등
- 전체 문제 유형
  - 알고리즘
    - 정렬
    - 이진 검색
    - 비트 연산
    - 슬라이딩 윈도우, 페이지 교체
    - 분할 정복
      - 그리디 알고리즘
      - 다이나믹 프로그래밍
  - 자료구조
    - 선형
      - 스택과 큐, 데크
      - 연결리스트, 해시 테이블
    - 비선형
      - 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
      - 트리
        - 힙
        - 트라이

## 간단한 코드 스니펫

```js
// python에 있는 유용한 코드를 js로 모듈화

// 1-1. 묶음
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
// 제약조건, a가 map을 사용하기 위하여, array 형태여야 한다 -> 새로운 array 반환

// 1-2. 범위 안에 수 생성
const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
// * 함수나 변수이름에 "_"가 들어가면 -> 사용하지 않는 변수라는 뜻

Array.from("hello"); // ['h','e','l','l','o']
Array.from({ one: 10, two: 20 }); // 인자가 이터러블 하지 않아서 사용 불가
Array.from([1, 2, 3]);
Array.from(new Set([1, 2, 3]));
Array.from(new Map([1, 2], [3, 4]));

// map function
Array.from([1, 2, 3], (x) => x + x);
Array.from("hello", (x) => x + x);
// * 이터러블 : next 값이 있는 값

// 1-3. 평평하게 만들기 (평탄화)
const flatten = (arr, depth = Infinity) => arr.flat(depth);
// const flatten = (arr) =>
//   arr.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
//     []
//   );

[1, [2, [3, [4]]]].flat();
[(1, [2, [3, [4]]])].flat(1);
[(1, [2, [3, [4]]])].flat(infinite);

// 2. js에서 사용할 유용한 코드 - 알고리즘에서 사용할 일이 많은
Array(5).fill(0);
Array(5)
  .fill(0)
  .map((v, i) => i + 1);

".".repeat(5);
".".repeat(5).split("."); // 권하진 않음

Array.from("ab".repeat(5));

Infinity;
-Infinity;

Math.ceil(1.1); // 올림
Math.floor(1.1); // 내림
Math.max(1, 2, 3, 4, 5);
Math.max([1, 2, 3, 4, 5]); // NaN
Math.max(...[1, 2, 3, 4, 5]); // 전개구문

// 형변환
parseInt("1234", 10); // 10진수를 10진수로 변환
parseInt("1001", 2); // 2진수를 10진수로 변환
parseInt("aa1234.abc"); // 오류는 안남
parseInt("12aa34.abc"); // 12까지 변환해줌

Math.floor(10 / 3);

// 참고) 비트단위 연산자 이용 - 안전한 parseInt를 사용하길 권장
// 비트단위 연산자는 실무에서 쓸 일이 없긴 하다. 이런 방법도 있기는 하다.
~~(10 / 3); // 소수점 제거 (비트단위 not 연산자 *2 -> 정수가 됨, "~" 연산자를 알필요는 없음)
(10 / 3) | 0;
(10 / 3) >> 0;
5 << 3;

// 자릿수 고정
(1234.56789).toFixed(2); // 1234.57
(1234.56789).toFixed(0); // 1235
(1234.56789).toFixed(4); // 1234.5679
(1234.56789).toFixed(6); // 1234.567890

// match는 문자열에서 정규식을 사용할 수 있습니다.
"2345678910111213".match(/1/g); // g는 global이에요. 전역에서 찾겠다는 것입니다. 앞에 슬러시와 뒤에 슬러시는 정규식을 사용할 때 사용합니다.
"2345678910111213".match("1");
"2345678910111213".match(/1/);
"2345678910111213".match(/1/g);
"2345678910111213".match(/1/g).length;
"hello world, it is my world.".match(/world/g).length;
```

- 참고) 2, 8, 16, 10진수 - 보통 알고리즘에서만 쓰임
  - 진수의 변환 시, 쉽게 10 -> 2진수로 변환하는 법
  - 가까운 2의 제곱수를 찾아서 그 값에서 얼마를 더 더할지 확인
  - 1000 -> 순서대로, 2^3, 2^2, 2^1, 2^0

## 워밍업 문제

- 링크: https://codingdojang.com/scode/393

```js
// 이렇게 풀지 마세요 1
// xxx8:000 ~ 999개
// xx8x:000 ~ 999개
// x8xx:000 ~ 999개
// 8xxx:000 ~ 999개
// 중복 => 중복을 허락해야 합니다. 4000개가 답이 맞습니다.
// 이런식으로 풀이하는 것을 보려고 하는 문제가 아닙니다!

// 이렇게 풀지 마세요 2
// 이런 카운팅 하는 문제에 lv1문제는 대부분 문자열 문제입니다.
// [0, 0, 0, 0] ~ [9, 9, 9, 9] 반복을 돌며 풀지 마세요.

// 이렇게 풀지 마세요 3
count = 0;
for (let i of "12345678910111213") {
  console.log(i);
  if (i === "1") {
    count++;
  }
}
count;

// 최대한 내장 메서드를 이용해주세요.
// 효율적으로 풀 수 있는 방법을 찾아주세요.

// 권장 풀이법 1
"12345678910111213".match(/1/g).length;

// 추가 풀이법 2
Array(100)
  .fill(0)
  .map((_, i) => i)
  .join("")
  .split("")
  .filter((v) => v === "1").length;

// 모든 코드를 다 한줄로 만들려는 것은 좋지 않습니다.
Array(100)
  .fill(0)
  .map((_, i) => i)
  .join("")
  .match(/1/g).length;
```

## 워밍업 문제 2

- 링크: https://codingdojang.com/scode/408
- 순서쌍, 최댓값, 최솟값, 특정값의 정렬 문제 -> 모두 정렬 문제!

```js
const s = [1, 3, 4, 8, 13, 17, 20];

// 이렇게 풀지마세요 1
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i + 1] - s[i]);
  if (s[i + 1] - s[i] < min) {
    min = s[i + 1] - s[i];
    index = i;
  }
}

console.log(s[index], s[index + 1]);

// 최솟값: 최댓값을 먼저 저장해야 함
// 최댓값: 최솟값을 먼저 저장해야 함

// 권장 풀이 1 - 이렇게 풀면 간단하다
const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));

// 이 상태에서 정렬을 하고 최솟값을 찾으면 됩니다.
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];

// 권장 풀이 2
const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));
let min = Infinity;
let result = [];

for (let [i, j] of pair) {
  console.log(i, j);
  if (j - i < min) {
    min = j - i;
    result = [i, j];
  }
}

console.log(result);
```

## 워밍업 문제 3

- 링크: https://100.jsalgo.co.kr/?page=4#

```js
const cookies = ["쿠키 3개", "쿠키 2개", "쿠키 5개"];

// 제일 간단한 방법 - match로 풀기
function solution(data) {
  let result = 0;
  let tmep = 0;
  data.forEach((v) => {
    console.log(v.match(/\d+/g)[0]);
    result += parseInt(v.match(/\d+/g)[0] * temp);
    temp++;
  });
  return result;
}
// 참고) parseInt : 숫자가 먼저 나올때만 찾을 수 있다!
// ㄴ 따라서 match 정규표현식으로 숫자만 찾아야 함 \d: 숫자만, \w: 문자만(?)
// ㄴ \d+ : +는 ...

// 정규표현식 쓰지 않고 풀기
function solution(data) {
  let result = 0;
  let temp = 1;
  data.forEach((v) => {
    result += parseInt(v.split(" ")[1]) * temp;
    temp++;
  });
  return result;
}
```

- 코딩테스트는 보통 통과되는지 여부만 확인한다
- 코딩테스트시

## 워밍업 문제 4

- 문제: 평균점수 카운팅
- 링크: https://100.jsalgo.co.kr/?page=11

```js
function solution(data){
    let result = 0; // 80점 이상인 학생 수
    data.forEach(v => {
        let mean = 0; // 각 학생의 평균
        v.forEach(i => {
            mean += i;
        });
        mean /= v.length;
        if (mean >= 80) {
            result++;
        }
    });
    return result;
}

solution([[92, 85, 97], [30, 21, 60], [90, 99, 98], [0, 0, 0], [81, 80, 88]])

////////////////

function solution(data){
    let mean = 0; // 각 학생의 평균
    let result = 0; // 80점 이상인 학생 수
    data.forEach(v => {
        mean = v.reduce((acc, cur) => acc + cur) / v.length;
        if (mean >= 80) {
            result++;
        }
    });
    return result;
}

solution([[92, 85, 97], [30, 21, 60], [90, 99, 98], [0, 0, 0], [81, 80, 88]])

//////////////// reduce 소개

[10, 20, 30].reduce((a, c) => {
    console.log(`a: ${a}`);
    console.log(`c: ${c}`);
    return a + c;
}, 0)

//////////////// reduce 예시

[10, 20, 30, 40, 50].reduce((a, c) => a + c)
[92, 85, 97].reduce((a, c) => a + c)
[].reduce((a, c) => a + c)

[10, 20, 30].reduce((a, c) => a + c, 0)

////////////////

// 배열의 전체 합 구하는 식은 외워두기
// 주의: 초기값 미설정시 빈 배열에서 오류발생

// 메서드로 푸는 것을 강조하는 이유?
// 검증된 메서드, 가독성, 코드의 효율성(미미하나), 코드의 안정성
// 다른 언어로 개발할 때에도 메서드가 거의 동일하게 사용됨 (의식의 흐름이 유사)

[].reduce((a, c) => a + c, 0);
[88, 92, 93].reduce((a, c) => a + c, 0);

// filter, reduce, length 사용해서 문제 풀기 - 웨않되?
function solution(data) {
  function con(arr) {
    return arr.reduce((a, c) => a + c, 0) / arr.length;
  }
  let answer = data.filter((arr) => con(arr) >= 80).length
  return answer;
}

function solution(data) {
  return data.filter(v => v.reduce((a, c) => a + c, 0)/v.length >= 80).length;
}

// 풀이
// 상수 연산은 내가 하는게 효율상 낫다...
function solution(data) {
  return data.filter(v => v.reduce((a, c) => a + c, 0) >= 240).length;
}
```

## 워밍업 문제 5

- 문제: 비트 치환 문제 (4번에 1번꼴로 등장)
- 링크: https://100.jsalgo.co.kr/?page=30

```js
//  9.toString()
//  (9).toString()

// let a = 9;
// a.toString();

let a = 9;
a.toString(2);

////////////////////////////////////////////////////////////////
// 이렇게 풀지마세요
function solution(data) {
  let result = "";
  for (let s of data.toString(2)) {
    console.log(s);
    if (s === "1") {
      result += "A";
    } else {
      result += "B";
    }
  }
  return result;
}

solution(9);

////////////////////////////////////////////////////////////////
// 추천방법: 메서드 체이닝
(9).toString(2).replace(/1/g, "A").replace(/0/g, "B");

function solution(data) {
  return data.toString(2).replace(/1/g, "A").replace(/0/g, "B");
}

solution(9);
```

## 워밍업 문제 6

- 문제이름: 중복된 숫자 갯수
- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120583

```js
// 보통 푸는 방식 (나도 이렇게 품)
function solution(array, n) {
  let answer = 0;
  for (let i of array) {
    if (i === n) {
      answer++;
    }
  }
  return answer;
}

solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 3);

////////////////
// 가능은 하나 권하지는 않음
for (let i of array) if (i === n) answer++;

////////////////

function solution(array, n) {
  return array.filter((v) => v === n).length;
}
```

## 워밍업 문제 7

- 문제이름: 머쓱이보다 키 큰 사람
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120585

```js
function solution(array, height) {
  return array.filter((v) => v > height).length;
}

solution([175, 180, 165, 170, 185], 175);

////////////////

function solution(array, height) {
  array.sort((a, b) => b - a);
  let index = array.findIndex((h) => h <= height);

  if (index === -1) return array.length;
  return index;
}

solution([175, 180, 165, 170, 185], 175);

//////////////// map

// map 이런식으로 사용하는것 외워두기
[175, 180, 165, 170, 185].map((v) => v > 175);
[175, 180, 165, 170, 185].map((v) => (v > 175 ? true : false));
[175, 180, 165, 170, 185].map((v) => (v > 175 ? 1 : 0));

function solution(array, height) {
  let arr = array.map((v) => v > height);
  return arr.reduce((a, c) => a + c, 0);
}

solution([175, 180, 165, 170, 185], 175);
```

## 워밍업 문제 8

- 문제이름: 자릿수 더하기
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120906

```js
(123).toString().split("");
(123)
  .toString()
  .split("")
  .map((v) => parseInt(v));
(123)
  .toString()
  .split("")
  .map((v) => parseInt(v))
  .reduce((a, c) => a + c, 0);
(123)
  .toString()
  .split("")
  .reduce((a, c) => a + c);
(123)
  .toString()
  .split("")
  .reduce((a, c) => a + c, 0);
(123)
  .toString()
  .split("")
  .reduce((a, c) => a + parseInt(c), 0);
(123)
  .toString()
  .split("")
  .reduce((a, c) => a + parseInt(c) * 2, 0);

// 비교
(123)
  .toString()
  .split("")
  .map((v) => parseInt(v))
  .reduce((a, c) => a + c, 0);
(123)
  .toString()
  .split("")
  .reduce((a, c) => a + parseInt(c), 0);

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((a, c) => a + parseInt(c), 0);
}

solution(123);
```

# 2. 기본 자료구조와 알고리즘

1. 스택과 큐
2. 연결리스트
3. 트리와 그래프
   - 3.1 트리 구현
   - 3.2 트리의 순회
4. 정렬 알고리즘
   - 4.1 선택정렬
   - 4.2 삽입정렬
   - 4.3 병합정렬
   - 4.4 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

- 학문적 접근이 아니라면 잠시 미뤄두삼
  - ADT(Abstrract Data Type) : 스택이라는 자료형을 구현할 때, 구현해야할 메서드명, 멤버 변수명 등을

## 2.1 스택과 큐

### 2.1.1 스택과 큐의 개념

    - 스택: LIFO (Last In First Out), 가장 최근에 들어온 데이터가 가장 먼저 나가는 구조 (한쪽이 막힌 구조)
    - 큐: FIFO (First In First Out), 가장 먼저 들어온 데이터가 가장 먼저 나가는 구조 (양쪽이 뚫린 구조)
    - 스택, 큐 관련 간단한 문제
        - 다음중 스택이 될 수 없는 것은? 스택에 들어가는 값은 1, 2, 3, 4, 5 (D)
        * A: 1, 2, 3, 4, 5
        * B: 3, 2, 4, 5, 1
        * C: 4, 3, 2, 5, 1
        * D: 1, 5, 4, 2, 3
    - 이게 왜 중요할까? 왜 스택관련 질문이 많이 나올까?
        - 예를 들어, 컴퓨터에서 프로그램을 호출하면 스택에 쌓이게 된다. 만약 문서 작업 -> 게임 -> 인터넷 서핑 -> 넷플릭스를 보았다. 이 때, 넷플릭스를 종료했을 때 무엇이 나와야 하나?
        - alt + tab 사용시에도 마찬가지, 최근에 사용한 것이 나와야 한다.
        - 이러한 것들이 모두 스택, 큐의 개념을 사용한다.
    - JS에서는 이게 왜 중요한가?
        - JS 프로그래밍 할때, array 작업시 특히 데이터를 넣고 빼는 작업시, 스택과 큐 사용.

### 2.1.2 스택과 큐의 구현

```js
// 스택1. 뒤에서 넣고 뒤에서 빼는 스택
// 앞에서 빼면 스택이 깨지는 것! (할 수 있는데, 스택을 유지하기 위해 안하는 것)
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);

// 스택2. 앞에서 넣고 앞에서 빼는 스택
// 일반적으로는 1번 push - pop 을 주로 사용한다
let stack = [];
stack.unshift(1);
stack.unshift(2);
stack.unshift(3);
stack.shift();
console.log(stack);

// 큐1. 뒤에서 넣고 앞에서 빼는 큐
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();
console.log(queue);

// 큐2. 앞에서 넣고 뒤에서 빼는 큐
let queue = [];
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
queue.pop();
console.log(queue);
```

### 2.1.3 스택, 큐 응용 문제

```js
// 이 문제를 슬라이싱으로 풀면 아래 예제에서 오답이 나옵니다.
// [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1]
// [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5)
// [5, 6, 7, 8, 9] == [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5)
// JSON.stringify([5, 6, 7, 8, 9]) == JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5))

// const comp = JSON.stringify
// comp([5, 6, 7, 8, 9]) == comp([1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5))

// 모르겠다 봐봐리
function solution(data){
    let stack = [];
    let sandwich_count = 0;
    for (let i of data) {
        stack.push(i);
        if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
            stack.splice(-5);
            sandwich_count++;
        }
    }
    return sandwich_count;
}

solution([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1]);

// 따로 저장해두면 좋겠군!
const 비교 = JSON.stringify;
비교([5,6,7,8]) == 비교([1,2,3,4,5,6,7,8].slice(-5);
```

## 2.2 연결리스트

### 2.2.1 연결리스트의 개념

- 연결리스트는 보통 메모리 효율을 위해 사용
- 주로 데이터 부분과 다음 노드를 가리키는 포인터로 구성됨
- (뒤에 나올) 모든 트리, 그래프 등의 심화 문제는 이 "연결리스트"가 기반이 됨
- 개념 : https://en.wikipedia.org/wiki/Linked_list
- 알고리즘 시각화 : https://visualgo.net/ko 강추

### 2.2.2 연결리스트의 구현

- 가장 친숙한 자료형으로 링크드 리스트를 구현 -> 천천히 난이도 높이기

#### step1. object로 linked list 구현

```js
// 12, 99, 37

const linkedList = {
  head: {
    data: 12,
    next: {
      data: 99,
      next: {
        data: 37,
        next: null,
      },
    },
  },
};

console.log(linkedList["head"]);
console.log(linkedList.head);
linkedList.head.data;
linkedList.head.next.data;
linkedList.head.next.next.data;

// 이렇게 하면 뭐가 좋지? array로 [12, 99, 37]로 만들면 편하지 않나?
// -> 아래 링크의 이미지를 확인!
// https://www.mathwarehouse.com/programming/gifs/binary-search-tree.php#binary-search-tree-insertion-node
```

#### step2. object로 linked list 구현 + 계층구조 분리

- step1 형태에서 계층적인 구조를 분리하여 깔끔하게 만든다

```js
let linkedList = { head: null };
let node1 = { data: 12, next: null };
let node2 = { data: 99, next: null };
let node3 = { data: 37, next: null };

node1.next = node2;
node2.next = node3;
linkedList.head = node1;

console.log(linkedList.head.data);
console.log(linkedList.head.next.data);
console.log(linkedList.head.next.next.data);
```

#### step3. object로 linked list 구현 + 순회

- head를 사용하는 이유: 노드 중 첫번째를 삭제했을 때에도 시작(head) 파악하기 위해
- head, tail을 잡아주는 것이 관례 -> 효율

```js
let linkedList = { head: null };
let node1 = { data: 10, next: null };
let node2 = { data: 20, next: null };
let node3 = { data: 30, next: null };
let node4 = { data: 40, next: null };
let node5 = { data: 50, next: null };

linkedList.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let current = linkedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
```

#### step4. object로 linked list 구현 + search

- 40이라는 값의 인덱스를 반복문 안에서 찾아야 합니다.

```js
let linkedList = { head: null };
let node1 = { data: 10, next: null };
let node2 = { data: 20, next: null };
let node3 = { data: 30, next: null };
let node4 = { data: 40, next: null };
let node5 = { data: 50, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

linkedList.head = node1;

let current = linkedList.head;
let index = 0;
while (current) {
  console.log(index);
  if (current.data === 40) {
    break;
  }
  current = current.next;
  index++;
}
console.log(index);
```

### step5. class로 linked list 구현 - node만

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

node1 = new Node(10);
node2 = new Node(20);
node3 = new Node(30);
head = node1;

// head.next = node1; // 이거눈? 필요없나봐...
node1.next = node2;
node2.next = node3;
```

### step6. class로 linked list 구현 + 자동으로 값 연결

<!-- 모르겠다 봐봐리 -->

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }
  push(data) {
    let newNoda = new Noda(data);
    this.tail.next = newNode; // 마지막 값은 새로운 노드가 되어야 함
    this.tail = newNode; // 마지막 노드는 새로운 노드가 되어야 함
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);

console.log(l.head.next.next.data);
```

### step7. class로 linked list 구현 + length, toString

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.displayData = "";
  }

  push(data) {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    this.displayData += `${data}, `;
  }

  toString() {
    return `<${this.displayData.slice(0, -2)}>`;
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);

console.log(l.length);
console.log(l.toString());
```

### step8. class로 linked list 구현 + toString 순회

- constructor 내에 변수를 최소한으로 사용하는게 메모리상 효율적

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  toString() {
    let current = this.head.next; // this.head가 init 이기 때문
    let result = "";
    while (current) {
      result += `${current.data}, `;
      current = current.next;
    }
    return `<${result.slice(0, -2)}>`;
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);

console.log(l.length);
console.log(l.toString());
```

### step9. class로 linked list 구현 + insert

<!-- 트리가 잘 이해가 안됩니다... 봐봐리... -->

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  toString() {
    // this.head가 init이기 때문에
    let current = this.head.next;
    let result = "";
    while (current) {
      result += `${current.data}, `;
      current = current.next;
    }
    return `<${result.slice(0, -2)}>`;
  }

  insert(index, data) {
    let current = this.head.next;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    let newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);
l.insert(2, 100);

l.toString();
```

### 2.2.3 연결리스트의 종류

- Singly linked list
- Doubly linked list
- Circular linked list - 음수 인덱스

#### Doubly linked list의 형태

```js
const list = {
  head: null,
};

let list1 = { data: 12, next: null, pre: null };
let list2 = { data: 99, next: null, pre: null };
let list3 = { data: 37, next: null, pre: null };
let list4 = { data: 2, next: null, pre: null };

list.head = list1;
list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

list1.next.next.data;
// 37
list3.pre.pre.data;
// 12
list4.pre.pre.pre.next.next.data;
// 37
```

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.pre = null;
  }
}

class DoubleLinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }

  append(data) {
    let 새로운노드 = new Node(data);

    this.tail.next = 새로운노드;
    새로운노드.pre = this.tail;

    this.tail = 새로운노드;
  }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

## 쉬어가기 연습문제

### 문제1. 배열 회전시키기

- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120844
- 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

- 이러한 rotate 문제 -> 어려운 문제에서 "이어붙이기"로 쉽게 풀이 가능

```js
// 방법1. 떠올리기 가장 쉬운 방법
function solution(data, direction) {
  if (direction === "right") {
    const temp = data.pop();
    data.unshift(temp);
    return data;
  } else {
    const temp = data.shift();
    data.push(temp);
    return data;
  }
}

// 방법2. 공간복잡도를 줄인 방법 (변수 줄이기)
// 참고) 레벨3 이하는 공간복잡도 고려 안해도 된다
function solution(numbers, direction) {
  if (direction === "right") {
    numbers = [numbers.pop(), ...numbers];
  } else {
    numbers = [...numbers.slice(1), numbers.shift()];
  }
  return numbers;
}

// 방법3
function solution(data, direction) {
  return direction === "right"
    ? [data.pop(), ...data]
    : [...data.slice(1), data.shift()];
}

// 방법4. 이렇게 풀이하는 것도 가능
// * 어려운 문제가 나왔을 때, 이어붙이기가 요긴할거다
// [...arr, ...arr2] => [1, 2, 3, 1, 2, 3]
function solution(data, direction) {
  const total = [...data, ...data];
  if (direction === "right") {
    return total.slice(data.length - 1, -1);
  } else {
    return total.slice(1, 1 + data.length);
  }
}

solution([1, 2, 3], "right");
```

### 문제2. 숨어있는 숫자의 덧셈

- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120864
- 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

```js
// isNaN("1") => false
// 틀린 답변 -> 2자리, 3자리 등을 못찾습니다.
function solution(s) {
  let result = 0;
  for (let i of s) {
    if (!isNaN(i)) {
      result += parseInt(i);
    }
  }
  return result;
}

// 특정 패턴을 찾는 문제
// 정규표현식으로 숫자만 찾는 방법
"aAb1B2cC34oOp".match(/\d+/g);

// 풀이 방법
function solution(s) {
  return s.match(/\d+/g).reduce((a, c) => a + parseInt(c), 0);
}

solution("aAb1B2cC34oOp");
```

## 2.3 트리와 그래프

### 2.3.1 트리 기본형태

```js
// 이진 트리의 기본형태
// value
// child - left
// child - right
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};
```

### 2.3.2 트리 구현하기

![](images/tree만들기_트리순회_2.png)

- 위 형태를 참고해서 트리 만들기
- object나 class 로 구현해도 됨

```js
// 1. 객체로 트리구현
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};

// 클래스로 트리구현
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let tree1 = new Tree();
```

- 트리의 class 구현
  - 완벽한 트리를 구현하는게 목표는 아님

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    // GPT 질문 봐봐리 - init을 따로 지정해주는 이유 ? 바로 안넣고? 쓸일이 있나
    this.init = new Node(data);
    this.root = this.init;
    this.length = 0;
  }

  add(data) {
    let newNode = new Node(data);
    let current = this.root;
    while (current) {
      if (data == current.data) {
        return; // 이미 존재하는 값을 추가하려 하면 종료
      } else if (data < current.data) {
        // 작으면 왼쪽으로
        // 이동한 곳에 데이터가 비어있으면 그 자리에 넣고, 비어있지 않으면 다음 단계로
        if (!current.left) {
          current.left = newNode;
          this.length++;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        // 작으면 왼쪽으로
        // 이동한 곳에 데이터가 비어있으면 그 자리에 넣고, 비어있지 않으면 다음 단계로
        if (!current.right) {
          current.right = newNode;
          this.length++;
          return;
        }
        current = current.right;
      }
    }
  }
}

let t = new Tree(5);
t.add(3);
t.add(8);
t.add(1);
t.add(4);
t.add(6);
t.add(9);
```

#### DFS, BFS 추가

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    this.init = new Node(data);
    this.root = this.init;
    this.length = 0; // 노드의 갯수
  }

  add(data) {
    let newNode = new Node(data);
    let current = this.root;
    while (current) {
      if (data == current.data) {
        // 들어온 값이 이미 존재하는 값이면 추가하지 않습니다.
        return;
      } else if (data < current.data) {
        // 왼쪽으로 이동해야 합니다.
        // 이동한 곳에 데이터가 비어있으면 데이터를 넣습니다.
        // 이동한 곳에 데이터가 있으면 계속 타고 내려갑니다.
        if (!current.left) {
          current.left = newNode;
          this.length++;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        // 오른쪽으로 이동해야 합니다.
        // 이동한 곳에 데이터가 비어있으면 데이터를 넣습니다.
        // 이동한 곳에 데이터가 있으면 계속 타고 내려갑니다.
        if (!current.right) {
          current.right = newNode;
          this.length++;
          return;
        }
        current = current.right;
      }
    }
  }

  // 깊스너큐
  DFS() {
    // 깊이우선탐색, DFS(Depth First Search)
    // Stack 이용

    let result = []; // 방문경로
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }

  BFS() {
    // 너비우선탐색, BFS(Breadth First Search)
    // Queue 이용

    let result = []; // 방문경로
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }
}

let t = new Tree(5);
t.add(3);
t.add(8);
t.add(1);
t.add(4);
t.add(6);
t.add(9);

t.DFS();
t.BFS();
```

## 2.4 정렬 알고리즘

- 재미있는 사실(재미없을 수도 있습니다. 사례를 말씀드릴게요.)
  - JavaScript의 Array의 sort는 알고리즘이 고정이 아닙니다. 각 브라우저마다(벤더사마다) 다른 sort를 사용하고 있어서 같은 값이면 브라우저마다 보여지는 화면이 다를 수 있습니다.
  - Google이 Chrome 70 이전에 개수에 따라 다른 알고리즘을 혼합하는 정렬을 사용했다가(InsertionSort & QuickSort 사용) 얼마전에(18년도에) Timsort로 변경했습니다.
  - 정렬 알고리즘 중에서 가장 인기있는 알고리즘은 병합정렬(존 폰 노이만 제작)이었습니다.
  - Python에서 시작된 Timsort로(팀 피터스) 대동단결하고 있는 모양세입니다. Python 만세!
  - Timsort는 삽입정렬과 병합정렬을 적절히 조합한 것이고, 2002년도에 Python을 위해 C로 구현되었습니다.
  - 정렬 알고리즘 3대장 비교(Best, Worst)
    - 병합 정렬 : nlogn, nlogn
    - 퀵 정렬 : nlogn, n\*\*2
    - 팀소트 : n, nlogn
- 정렬 알고리즘을 작성할 때 주의사항

### 2.4.1 시간복잡도, 공간복잡도

- 알고리즘 측정의 대표적인 방법
- 시간복잡도 : 얼마나 많은 시간이 걸렸는지
- 공간복잡도 : 얼마나 많은 공간이 필요한지 (변수의 개수)

```js
// 시간복잡도 계산
// O(n)
// 최고차항의 차수로 표현, 계수와 낮은 차수 항은 무시하여 시간복잡도 계산
봐봐리! 여기 코드 복사해야함
```

### 분할과 정복

- 병합정렬과 퀵 솔트는 속도가 매우 빠르다 복잡하지만

### 2.4.2 선택정렬

- 가장 작은 것을 선택해서 앞으로 보내는 정렬
- 개념만 이해하고 코드는 다 이해할 필요 없다

- step 1
  전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
  후 = []

- step 2
  전 = [199, 22, 33, 32, 64, 72, 222, 233]
  후 = [12]

- step 3
  전 = [199, 33, 32, 64, 72, 222, 233]
  후 = [12, 22]

- step 4
  전 = [199, 33, 64, 72, 222, 233]
  후 = [12, 22, 32]

- step 5
  전 = [199, 64, 72, 222, 233]
  후 = [12, 22, 32, 33]

- 선택정렬 구현

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
// let 길이 = 입력값.length // 가변될 수 있는 값을 미리 변수로 선언하는 방식을 사용할 수도 있습니다.
while (!!입력값.toString()) {
  // !! 안해주어도 됩니다.
  let 최솟값 = Math.min(...입력값);
  정렬된배열.push(최솟값);
  입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

// 메서드 최소화된 코드, 새로운 arr를 만들지 않는 코드
// 최솟값 <-> 현재값
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];

function selectionSort(arr) {
  // [199, 22, 33, 12, 32, 64, 72, 222, 233]
  // 첫번째 순회
  // min_index = 0
  // 두번째 순회
  // arr[min_index] > arr[j]
  // arr[0] > arr[1] -> min_index = 1
  // arr[1] > arr[2] -> min_index = 1
  // arr[1] > arr[3] -> min_index = 3
  // arr[3] > arr[4] -> min_index = 3
  // arr[3] > arr[5] -> min_index = 3
  // arr[3] > arr[6] -> min_index = 3
  // arr[3] > arr[7] -> min_index = 3
  // arr[0](199) <-> arr[3](12)
  // 순회가 돌면 돌 수록 최솟값이 앞에 배치되게 된다.
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort(입력값));
```

### 2.4.3 삽입정렬

### 2.4.4 병합정렬

### 2.4.5 퀵 정렬

### 2.4.6 코딩테스트에 나오는 정렬 유형

```js
data = [
  [23, 33, "hello world"],
  [42, 11, "hello wo"],
  [33, 25, "hello wor"],
  [11, 12, "hello worl"],
  [82, 23, "hello"],
];

// 0번째 인덱스로 정렬
data.sort((a, b) => a[0] - b[0]);
data.sort((a, b) => b[0] - a[0]);

// 2번째 있는 글자의 글자수로 정렬
data.sort((a, b) => a[2].length - b[2].length);

// 국영수 점수와 이름
data = [
  [[23, 33, 44], "licat"],
  [[42, 11, 12], "mura"],
  [[33, 25, 33], "binky"],
  [[11, 12, 11], "gary"],
  [[82, 23, 22], "sun"],
];

// 국영수 점수의 평균이 가장 높은 사람 순으로 사람만 출력해주세요. - 뿌엥!! (봐봐리...)
// 데이터 추출은 map 입니다!!!
// 메소드별로 용도가 헷갈려요....
function 성적표(data) {
  const 성적 = data[0].reduce((a, c) => a + c, 0);
  let 성적순arr = data.sort((a, b) => b[0].성적 - a[0].성적);
  let 성적순name = 성적순arr.reduce((i) => i[1]);
  return 성적순name;
}
console.log(data);

// 봐봐리 코드 받아라리리

// 정렬희희
data = [
  { name: "licat", age: 23 },
  { name: "mura", age: 42 },
  { name: "binky", age: 33 },
  { name: "gary", age: 11 },
  { name: "sun", age: 82 },
];

// age 순서대로 정렬하고 싶을 때
data.sort((a, b) => a.age - b.age);
```

- 입사 문제로 많이 나오는 데이터 추출 문제

```js
[
  {
    _id: "b2c4ee1e-7a2c-47af-C027-6ade6be8ea5b",
    index: "1",
    name: "비태원",
    email: "user-co8qr7s@vel.net",
    phone: "010-8293-7909",
    country: "기니",
    address: "뚝섬로 60-1",
    job: "에너지공학기술자",
  },
  {
    _id: "2ef03b96-00b6-4d34-A402-9db92e7e6d79",
    index: "2",
    name: "석시유",
    email: "user-6fvcvay@proin.org",
    phone: "010-4813-4314",
    country: "이탈리아",
    address: "대림로 76-3",
    job: "군무원",
  },
  {
    _id: "dfcf47f4-baa2-4f5e-Ac81-0539556ebf3e",
    index: "3",
    name: "영지석",
    email: "user-yoeagh8@aenean.co.kr",
    phone: "010-9256-2158",
    country: "쿡 제도",
    address: "영등포로 24-8",
    job: "물리치료사",
  },
].map((data) => data.job);
```

### 2.4.7 코딩테스트에 나오는 정렬 문제

- https://school.programmers.co.kr/learn/courses/30/lessons/120835

```js
function solution(emergency) {}
```

## 2.5 페이지 교체 알고리즘 (??? 이해 못했다)

- https://www.notion.so/paullabworkspace/db83d9c4bbe6410ea208e6dc2daff07e
- 예전에는 많이 출제되었는데, 요즘은 또 그렇지 않다

- FIFO는 시험에 나오지 않는다 - 알고만 있어라 선입선출
- 나오면 LRU 알고리즘이 100프로로 나온다

### 2.5.1 LRU 알고리즘 구현

```js
function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let idx = cache.indexOf(city);
    if (idx !== -1) {
      // hit
      cache.splice(idx, 1);
      cache.push(city);
      time += 1;
    } else {
      // miss
      cache.push(city);
      time += 5;
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }
  return time;
}
```

## 2.6 슬라이딩 윈도우와 투 포인터 알고리즘

### 2.6.1 슬라이딩 윈도우 알고리즘

```js
// 연속된 3개의 합이 10인 것의 쌍을 출력하는 함수를 만드세요
data = [1, 4, 3, 3, 6, 8, 2, 7, 5, 4, 1, 3, 9, 1, 10];

function solution(data) {
  let result = [];
  for (let i = 0; i < data.length - 2; i++) {
    let sum = data[i] + data[i + 1] + data[i + 2];
    if (sum === 10) {
      result.push([data[i], data[i + 1], data[i + 2]]);
    }
  }
  return result;
}

solution(data);
```

- 투 포인터 알고리즘: 2개의 포인터를 이용하여 원하는 결과를 얻는 알고리즘

```js
// 연속된 데이터의 합이 10인 것의 쌍을 출력하는 함수
```

# 3. 카카오 코딩테스트 문제풀이

## 3.1 비밀지도 문제 (2018)

- 문제: https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
- 주제: 비트 연산, 논리 연산
- 파이썬 풀이: https://youtu.be/orf9ailzXvI

```
n        5
arr1    [9, 20, 28, 18, 11]
arr2    [30, 1, 21, 17, 28]

    01001 (9)
or  11110 (30)
---------
    11111 => "#####"

    10100 (20)
or  00001 (1)
---------
    10101 => "# # #"

    11100 (28)
or  10101 (21)
---------
    11101 => "### #"

["#####","# # #", "### #", "# ##", "#####"]
```

```js
// step1
function solution(n, arr1, arr2) {
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([a, b] of zip(arr1, arr2)) {
    console.log(a, b);
  }
}

// step2

// step3
function solution(n, arr1, arr2) {
  const result = [];
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([a, b] of zip(arr1, arr2)) {
    result.push((a | b).toString(2));
  }
  return result;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
```

## 3.2 다트게임 문제

- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17682
- 정규표현식 풀이를 권함

```js
// 1S2D3T
// 1^1 + 2^2 + 3^3
// 3S2T3T
// 3^1 + 2^3 + 3^3
// 1D2S#10S
// 1^2 + 2^1*(-1) + 10^1
// 1D2S10S*
// 1^2 + 2^1*2 + 10^1*2

"1D2S10S*".match(/(\d+)([SDT])([\*\#]?)/g);

for (let s of "1S2D3T") {
  console.log(s);
}

//////////////////////////////

const dart = "1D2S10S*";
const regex = /(\d+)([SDT])([\*\#]?)/g;
const dartResult = dart.match(regex);

dartResult;

//////////////////////////////

const dart = "1D2S10S*";
const regex = /(\d+)([SDT])([\*\#]?)/g;
const dartResult = [...dart.matchAll(regex)].map((match) => match.slice(1));

dartResult;
```

```js
// 알고리즘에서는 let을 써도 무방하니까 let을 씀! -> 생각할 시간도 줄이자~
// == 를 더 많이 쓰는 이유도 비슷할까? 꼭 필요할때만 === 쓰고? 타입 비교가 필요할때만 (그럴때도 거의 없을듯) -> 아니었음 세개 기본, 필요할때만 2개
// 실무에서는 array를 let으로 쓰는 경우가 없쟈나!
// 테스트 페이지에선 디버깅이 안되니까, 콘솔로그에서 중간중간 테스트 해보길 권함
testcase = [
  "1S2D*3T", // 37
  "1D2S#10S", // 9
  "1D2S0T", // 3
];

// 문제풀이 흐름 파악하기
// step1. 전체 틀, 기본 점수 체계 (5~10분)
// 1-1. 전체적인 틀 먼저 세우기
function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {}
}

for (let dart of testcase) {
  console.log(solution(dart));
}

// 1-2. for문 내 if문 작성 -> 점수계산
function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 10점을 고려하지 않음
      // 문자와 숫자 비교가능 -> if문 조건에서 parseInt 생략
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    }
    return answer;
  }
}

for (let dart of testcase) {
  console.log(solution(dart));
}

// step2. 스타상, 아차상
function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 10점을 고려하지 않음
      // 문자와 숫자 비교가능 -> if문 조건에서 parseInt 생략
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      // 이렇게 자른게 트기허다~
      answer[answer.length - 1] *= 2; // 현재 점수 * 2
      if (answer.length > 1) {
        answer[answer.length - 2] *= 2; // 이전 점수 * 2
      }
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1; // 현재 점수 * (-1)
    }
    return answer;
  }
}

for (let dart of testcase) {
  console.log(solution(dart));
}

// step3. 10점일때
function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 추가된 부분 -> 점수 10 처리
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
        // 다음 턴으로 넘어간다!
      }

      // 10점을 고려하지 않음
      // 문자와 숫자 비교가능 -> if문 조건에서 parseInt 생략
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      // 이렇게 자른게 트기허다~
      answer[answer.length - 1] *= 2; // 현재 점수 * 2
      if (answer.length > 1) {
        answer[answer.length - 2] *= 2; // 이전 점수 * 2
      }
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1; // 현재 점수 * (-1)
    }
    return answer;
  }
}

for (let dart of testcase) {
  console.log(solution(dart));
}

// 참고) 순서 건너뛰기 (continue랑 같나?)
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    i++;
  }
  console.log(i);
}
```

## 3.3 오픈채팅방 (2019)

- 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
- 장문의 문제를 많이 풀어보는 연습으로, 독해력을 키우면 문제의 방향을 찾기 쉬워진다아~

```js
{
    '아이디': '닉네임',
    '아이디': '닉네임',
    '아이디': '닉네임',
    '아이디': '닉네임'
    // 이렇게 관리해서 나중에 문자열 조합을 통해
    // 문제에서 원하는 결과물을 출력
}

// 위 데이터를 가지고

[
"Prodo님이 들어왔습니다.",
"Ryan님이 들어왔습니다.",
"Prodo님이 나갔습니다.",
"Prodo님이 들어왔습니다."
]


// step1
// 5분 ~ 10분
const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = [];
    let user = {};

    for (const i of record){
        let [상태, 아이디, 닉네임] = i.split(' ');
        answer.push([상태, 아이디, 닉네임]);
    }

    return answer;
}

solution(record)

// step2
const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = [];
    let user = {};

    for (const i of record){
        let [상태, 아이디, 닉네임] = i.split(' ');
        if (상태 === 'Enter') {
            user[아이디] = 닉네임;
            answer.push([아이디, '님이 들어왔습니다.']);
        } else if (상태 === 'Change') {
            user[아이디] = 닉네임;
        } else if (상태 === 'Leave') {
            answer.push([아이디, '님이 나갔습니다.']);
        }
    }

    answer = answer.map(([아이디, 상태]) => `${user[아이디]}${상태}`);

    return answer;
}

solution(record)
```

## 3.4 실패율

- 링크:
- 유형: 정렬기준이 있고, 정렬기준에 따라서 map을 통해 새로운 정렬을 만들어내는것

```js
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N    stages                      result
// 5    [2, 1, 2, 6, 2, 4, 3, 3]    [3, 4, 2, 1, 5]
// 4    [4, 4, 4, 4, 4]                [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0

// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)

// 코테 때 a4 한장정도 허용해주는 경우가 많다(?) - 치트시트까지?
// 문제 풀이 순서
// 1-1.
function solution(N, stages) {}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 1-2. 각 스테이지에 도달한 유저수 구하기 (분자)
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let 도달유저수 = stages.filter((user) => user === i).length;
    실패율.push(도달유저수);
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 1-3. 분모 구하기 (유저수)
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let 도달유저수 = stages.filter((user) => user === i).length;
    실패율.push(도달유저수 / 유저수);
    console.log(도달유저수 / 유저수);
    유저수 -= 도달유저수;
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 2. 정렬
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push({
      stage: i,
      rate: 도달한사람수 / 유저수,
    });
    console.log(도달한사람수, 유저수);
    유저수 -= 도달한사람수;
  }
  실패율.sort((a, b) => b.rate - a.rate);

  return 실패율.map((data) => data.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
```
