class TextManager {
  constructor() {
    this.value = { data: "hello EST" };
  }

  // 클래스 내 함수 선언시 "function" 생략가능
  getValue() {
    return this.value.data;
  }

  setValue(newValue) {
    this.value = newValue;
  }
}
