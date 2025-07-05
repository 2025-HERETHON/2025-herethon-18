
//카테고리 누르면 해당 페이지로 넘어가고 버튼 색상도 active로 교체
// HTML 문서가 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
  
  // 현재 페이지 파일명 추출 (예: 'list_teen.html')
  const currentPage = window.location.pathname.split('/').pop();
  console.log("현재 페이지:", currentPage); // 개발자 도구 콘솔 확인용 로그

  // 카테고리 필터 내 모든 <a> 링크를 선택
  document.querySelectorAll('.category_filter a').forEach(link => {
    
    // <a> 내부의 <button> 요소 선택
    const button = link.querySelector('button');

    // 현재 <a> 태그의 href 값 가져오기 (예: 'list_teen.html')
    const linkHref = link.getAttribute('href');

    // 현재 페이지 경로가 링크 경로와 일치하면 active 클래스 추가
    if (linkHref && linkHref.endsWith(currentPage)) {
      button.classList.add('active');
      console.log("✅ active 적용됨:", linkHref); // 어떤 버튼에 active가 적용됐는지 확인용
    }
  });
});

// 좋아요, 북마크 +1 & 이미지 교체
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon_item").forEach(icon => {
    icon.addEventListener("click", function () {
      const img = this.querySelector("img");
      const countSpan = this.querySelector(".count");
      const type = this.getAttribute("data-type");
      const isActive = this.classList.contains("active");

      let count = parseInt(countSpan.textContent);

      // 숫자 토글
      if (isActive) {
        this.classList.remove("active");
        count--;
      } else {
        this.classList.add("active");
        count++;
      }

      countSpan.textContent = count;

      // 이미지 파일 경로 변경
      let newSrc = "";

      if (type === "like") {
        newSrc = isActive
          ? "/static/assets/img/like_btn.png"
          : "/static/assets/img/full_heart_icon.png";
      } else if (type === "bookmark") {
        newSrc = isActive
          ? "/static/assets/img/bookmark_icon.png"
          : "/static/assets/img/full_bookmark_icon.png";
      }

      // 이미지 교체 (캐시 우회)
      img.src = newSrc + "?v=" + new Date().getTime();
    });
  });
});

