import React from "react";
import styles from "./Home.module.css";
import editIcon from "../../img/icon-edit.svg";
import delIcon from "../../img/icon-delete.svg";
import { Timestamp } from "firebase/firestore";

export default function DiaryList({ data }) {
  console.log(data);
  return data.map((item) => (
    <li key={item.id}>
      <article className={styles["diary-article"]}>
        <h3 className={styles["article-title"]}>{item.title}</h3>
        <time className={styles["article-time"]} dateTime="2023-03-15">
          2023.02.24.THU
        </time>
        <p className={styles["article-content"]}>{item.content}</p>
        <div className={styles["button-group"]}>
          <button type={styles["button"]}>
            <img src={editIcon} alt="수정" />
          </button>
          <span />
          <button type="button">
            <img src={delIcon} alt="삭제" />
          </button>
        </div>
      </article>
    </li>
  ));
}
