import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-wrap">
        <h1>
          <a href="./">
            <img className="logo" src="img/logo.svg" alt="두근두근 비밀일기" />
          </a>
        </h1>
        <div>
          <a href="./join.html" className="btn-join">
            회원가입
          </a>
        </div>
      </div>
    </header>
  );
}
