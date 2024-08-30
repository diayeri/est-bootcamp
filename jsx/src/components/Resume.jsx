function Resume(props) {
  return (
    <div className="box">
      <h2>{props.name} 자기소개서</h2>
      <h2>{props.hello}</h2>
      <h3>취미: {props.hobby}</h3>
      <h3>좋아하는 음식: {props.food}</h3>
      <h3>
        좋아하는 색: <span style={{ color: props.color }}>{props.color}</span>
      </h3>
    </div>
  );
}
export default Resume;
