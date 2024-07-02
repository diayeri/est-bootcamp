// 페이지의 URL 경로를 가져옴
const currentPath = window.location.pathname;

// 공통 요소 (헤더와 푸터) 추가 함수
function addHeaderAndFooter() {
  document.getElementById("header").innerHTML = `
        <nav>
            <ul>
                <a href="/index.html">👈 main</a>
            </ul>
        </nav>
    `;

  // document.getElementById("footer").innerHTML = `
  //       <footer>
  //           <p>&copy; 2024 My Practice Site</p>
  //       </footer>
  //   `;
}

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
  // 하위 페이지: 헤더와 푸터 추가
  addHeaderAndFooter();
}
