document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split('/').pop();

  document.querySelectorAll('.category_btn').forEach(link => {
    const linkHref = link.getAttribute('href');

    if (linkHref && linkHref.endsWith(currentPage)) {
      link.classList.add('active');
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

//url 이동
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.board_item').forEach(item => {
      item.addEventListener('click', function (e) {
        // 좋아요/북마크 아이콘 클릭 시 이동 막기
        if (e.target.closest('.icon_item')) return;

        const targetUrl = item.dataset.url;
        if (targetUrl) {
          // 새 탭으로 열기
          window.open(targetUrl, '_blank');
        }
      });
    });
  });
