class ViewManager {
  // elements -> input, view, button
  constructor(textManager, elements) {
    // 초기화
    if (textManager.constructor !== TextManager) {
      throw new Error("textManager 객체가 전달되지 않음");
    }

    if (!elements.btnEl || !elements.viewerEl || !elements.inputEl) {
      throw new Error("세가지 중 요소 누락됨");
    }

    this.inputEl = elements.inputEl;
    this.viewerEl = elements.viewer;
    this.textManager = elements.textManager;

    elements.btnEl.addEventListener("click", (e) => {
      this.changeValue();
    });
  }
  changeValue() {
    this.textManager.setValue({ data: this.inputEl.value });
    this.updateViewer();
  }

  updateViewer() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
