function Time() {
  const time = new Date();
  const timeStyle = { backgroundColor: "black", color: "white" };
  return (
    <>
      <h2>time: {time.toString()}</h2>
      <div className="flex">
        <h2 style={{ ...timeStyle, color: "red" }}>{time.getFullYear()}년</h2>
        <h2 style={timeStyle}>
          {time.getMonth() + 1}월 {time.getDate()}일 {time.getDay()}요일
        </h2>
        <h2 style={timeStyle}>
          {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
        </h2>
      </div>
    </>
  );
}
export default Time;
