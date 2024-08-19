import "./ButtonList.css";

function MoodButton(props) {
  const clickMoodBtn = () => {
    // console.log(props.mood);
    props.setMood(props.mood);
  };

  return (
    <li>
      <button
        className={`btn btn-block ${props.isSelected ? "active" : ""}`}
        onClick={clickMoodBtn}
      >
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
      {moodList.map((mood, index) => (
        <MoodButton
          setMood={props.setMood}
          key={index}
          mood={mood}
          isSelected={props.currentMood === mood}
        />
      ))}
    </ul>
  );
}
export default ButtonList;
