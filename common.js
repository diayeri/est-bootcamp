document.addEventListener("DOMContentLoaded", function () {
  // 페이지의 URL 경로를 가져옴
  const currentPath = window.location.pathname;

  // 공통 <head> 요소
  const commonHeadElements = `
    <link rel="stylesheet" href="../style.css">
  `;

  // 각 페이지의 제목 설정
  const pageTitle = document.querySelector("title").textContent;
  if (!pageTitle) {
    document.title = "기본 페이지 제목";
  }

  // Header and Footer Elements
  const headerHTML = `
      <nav>
        <a href="../index.html">🏠HOME</a>
      </nav>
  `;

  const footerHTML = `
      <p>&copy; 2024 Dayoung Jung. All rights reserved.</p>
      <p>
        For inquiries, please contact us at <a href="mailto:jdyoung1031@gmail.com">jdyoung1031@gmail.com</a>.
      </p>
  `;

  // 페이지 내용 (리스트 항목) 동적으로 추가 함수
  function loadPageContent() {
    fetch("pages.json")
      .then((response) => response.json())
      .then((pages) => {
        const contentDiv = document.getElementById("content");

        let htmlContent = "<fieldset><legend>HTML</legend><ul>";
        pages.html.forEach((page) => {
          htmlContent += `<li><a href="${page.link}">${page.title}</a></li>`;
        });
        htmlContent += "</ul></fieldset>";

        htmlContent += "<fieldset><legend>CSS</legend><ul>";
        pages.css.forEach((page) => {
          htmlContent += `<li><a href="${page.link}">${page.title}</a></li>`;
        });
        htmlContent += "</ul></fieldset>";

        htmlContent += "<fieldset><legend>JavaScript</legend><ul>";
        pages.javascript.forEach((page) => {
          htmlContent += `<li><a href="${page.link}">${page.title}</a></li>`;
        });
        htmlContent += "</ul></fieldset>";

        contentDiv.innerHTML = htmlContent;
      })
      .catch((error) => console.error("Error fetching page data:", error));
  }

  // 메인 페이지와 하위 페이지에 따라 다른 동작 수행
  if (currentPath.endsWith("index.html")) {
    // 메인 페이지: 리스트 항목 추가
    loadPageContent();
  } else {
    // Header and Footer Insertion
    if (document.body) {
      // <head> 요소 업데이트
      document.head.innerHTML += commonHeadElements;

      const header = document.createElement("header");
      header.innerHTML = headerHTML;
      document.body.insertBefore(header, document.body.firstChild);

      const footer = document.createElement("footer");
      footer.innerHTML = footerHTML;
      document.body.appendChild(footer);
    }
  }
});
