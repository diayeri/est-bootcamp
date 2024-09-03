class ViewManager {
  // elements -> input, view, button
  constructor(textManager, elements) {
    // 초기화
    if (textManager.constructor !== TextManager) {
      throw new Error("textManager 객체가 전달되지 않음");
    }

    if (!elements.btnEl || !elements.viewerEl || !elements.inputEl) {
      throw new Error("세가지 중 누락된 요소가 있다");
    }

    this.inputEl = elements.inputEl;
    this.viewerEl = elements.viewerEl;
    this.textManager = textManager;

    elements.btnEl.addEventListener("click", () => {
      this.changeValue();
    });
  }
  changeValue() {
    this.textManager.setValue({ data: this.inputEl.value });
    this.updateView();
  }

  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
