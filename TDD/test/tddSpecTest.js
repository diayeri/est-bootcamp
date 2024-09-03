// describe 함수: 테스트 유닛들의 모음
describe("# 자스민 테스트", () => {
  // it: 함수의 테스트 유닛
  it("1을 더하는 함수", () => {
    // 테스트 내용: 상황을 가정
    let num = 30;

    // expect: 기대식 - 실행할 함수의 결과값을 인수로 전달
    // toBe: matcher 함수 - 기대한 결과값과 일치하는지 판단
    expect(plusOne(num)).toBe(num + 1);
  });
});
