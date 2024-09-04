// 로더가 읽을 파일이 item으로 전달됨
// - item: 리소스 파일의 콘텐츠를 담고 있는 "문자열"
module.exports = function myLoader(item) {
  // 반환하는 리소스를 replace 문법을 통해 가공
  return item.replace("console.log(", "alert(");
};
