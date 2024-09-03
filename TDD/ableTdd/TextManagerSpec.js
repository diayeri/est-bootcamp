describe("텍스트매니저 테스트", () => {
  // 텍스트매니저의 인스턴스 정의
  const textManager = new TextManager();

  it("텍스트매니저의 getValue 테스트", () => {
    const initValue = textManager.getValue();

    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트매니저의 setValue 테스트", () => {
    const newValue = { data: "hello weniv!!" };
    textManager.setValue(newValue);

    expect(textManager.getValue()).toBe(newValue.data);
  });
});
