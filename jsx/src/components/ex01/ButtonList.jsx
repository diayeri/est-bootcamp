import "./ButtonList.css";

function MoodButton(props) {
  const clickMoodBtn = () => {
    // console.log(props.mood);
    props.setMood(props.mood);
  };

  return (
    <li>
      <button className={`btn btn-block`} onClick={clickMoodBtn}>
        기분이: {props.mood}
      </button>
    </li>
  );
}

const moodList = [
  "좋아요! 😉",
  "정말 좋아요! 😆",
  "최고에요! 😍",
  "미쳤어요! 🤣",
];

function ButtonList(props) {
  return (
    <ul id="moodList">
      {moodList.map((item, index) => (
        <MoodButton setMood={props.setMood} key={index} mood={item} />
      ))}
    </ul>
  );
}
export default ButtonList;
