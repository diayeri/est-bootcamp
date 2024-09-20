import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useFireStore } from "../../hooks/useFireStore";

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // diary: 컬랙션 이름
  const { addDocument, response } = useFireStore("diary");

  const handleData = (e) => {
    if (e.target.type === "text") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content, uid);
    // uid : 작성한 유저의 아이디입니다. 지금 당장 사용하지않지만 나중에 누가 쓴 일기인지 구분할 수 있도록 auth정보로부터 받아와 Home.js 에서 props 로 전달받도록 만들겠습니다.
    addDocument({
      uid,
      title,
      content,
    });
  };

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setContent("");
      console.log("Success");
    }
  }, [response.success]);

  return (
    <form onSubmit={handleSubmit}>
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
