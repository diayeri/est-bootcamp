import React from "react";
import styles from "./Home.module.css";
import editIcon from "../../img/icon-edit.svg";
import delIcon from "../../img/icon-delete.svg";
import { useFireStore } from "../../hooks/useFireStore";

export default function DiaryList({ data }) {
  const { delDocument } = useFireStore("diary");
  const formattingTime = (seconds) => {
    console.log(new Date(seconds * 1000));
    const time = new Date(seconds * 1000);

    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const date = String(time.getDate()).padStart(2, "0");
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
      time.getDay()
    ];
    return [`${year}-${month}-${date}`, `${year}.${month}.${date}.${day}`];
  };

  console.log(data);
  return data.map((item) => (
    <li key={item.id}>
      <article className={styles["diary-article"]}>
        <h3 className={styles["article-title"]}>{item.title}</h3>
        {/* dateTime={formattingTime(item.createdTime.seconds).replaceAll('.','-').slice(0,-4)} 로도 처리 가능 */}
        <time
          className={styles["article-time"]}
          dateTime={formattingTime(item.createdTime.seconds)[0]}
        >
          {formattingTime(item.createdTime.seconds)[1]}
        </time>
        <p className={styles["article-content"]}>{item.content}</p>
        <div className={styles["button-group"]}>
          <button type={styles["button"]}>
            <img src={editIcon} alt="수정" />
          </button>
          <span />
          <button type="button" onClick={() => delDocument(item.id)}>
            <img src={delIcon} alt="삭제" />
          </button>
        </div>
      </article>
    </li>
  ));
}
