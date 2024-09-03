describe("클릭이벤트처리 및 뷰를 담당하는 함수", () => {
  let textManager = new TextManager();
  // 테스트 코드에서는 요소를 만들어서 확인해야함
  let elements = {
    inputEl: document.createElement("input"),
    viewerEl: document.createElement("div"),
    btnEl: document.createElement("button"),
  };
  let viewManager = new ViewManager(textManager, elements);

  it("viewManager에 textManager가 잘 전달되는지 확인 - 오류처리가 잘 되었는지", () => {
    // 반대로, 전달이 잘 안되면 오류가 잘 뜨는지 확인하기
    textManager = null;

    const actual = () => new ViewManager(textManager, elements);

    // toThrowError: 에러 발생하는지 여부 확인 (Jasmine)
    expect(actual).toThrowError();
  });

  it("viewManager에 필요한 3가지 요소 elements가 잘 전달되는지 확인", () => {
    elements = {
      inputEl: null,
      viewerEl: null,
      btnEl: null,
    };

    const actual = () => new ViewManager(textManager, elements);

    // toThrowError: 에러 발생하는지 여부 확인 (Jasmine)
    expect(actual).toThrowError();
  });

  it("click이벤트 발생시, changeValue 함수가 호출되었는지 확인", () => {
    // 특정 객체의 함수를 감시합니다.
    spyOn(viewManager, "changeValue");
    elements.btnEl.click();

    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("changeValue 함수 호출시, updateView 함수가 호출되는지 확인", () => {
    // 특정 객체의 함수를 감시합니다.
    spyOn(viewManager, "updateView");
    viewManager.changeValue();

    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
