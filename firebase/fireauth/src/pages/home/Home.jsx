import React from "react";
import DiaryForm from "./DiaryForm";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary", ["uid", "==", user.uid]);

  return (
    <div className={styles.container}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>2023.02.27의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section style={{ width: "100%" }}>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          {error && <strong>{error}</strong>}
          {documents && <DiaryList data={documents} />}
        </ul>
      </section>
    </div>
  );
}
