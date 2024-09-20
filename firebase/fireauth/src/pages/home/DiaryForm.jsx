import { useState } from "react";
import styles from "./Home.module.css";

export default function DiaryForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleData = (e) => {
    if (e.target.type === "text") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  return (
    <form>
      <label className="a11y-hidden" htmlFor="diary-title">
        일기 제목
      </label>
      <input
        className="input-style"
        id="diary-title"
        type="text"
        placeholder="제목"
        required
        onChange={handleData}
        value={title}
      />
      <label className="a11y-hidden" htmlFor="diary-content">
        일기 내용
      </label>
      <textarea
        className={styles["diary-textarea"]}
        id="diary-content"
        placeholder="오늘의 비밀은 무엇인가요?"
        onChange={handleData}
        value={content}
      />
      <button className="black-btn" type="submit">
        작성하기
      </button>
    </form>
  );
}
