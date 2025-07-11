// 헤더 상단 제목 클릭 시, main_002 화면으로 이동
document.querySelector(".logo")?.addEventListener("click", function () {
  window.location.href = "/home/";
});

// 상단 헤더 후기 버튼 클릭 시, rev_001로 이동
document.querySelector(".review-btn")?.addEventListener("click", function () {
  window.location.href = "/review/list/";
});

// 상단 헤더 커뮤니티 버튼 클릭 시, com_001로 이동
document.querySelector(".com-btn")?.addEventListener("click", function () {
  window.location.href = "/community/";
});

// 수정하기 버튼 준비중
document.querySelector(".edit_btn")?.addEventListener("click", function () {
  alert("수정 기능은 현재 준비 중입니다.");
});

const reviewsPerPage = 3;
let currentPage = 1;

// 더미 데이터 (백엔드 연동 시 대체 예정)
let reviews = [
  {
    id: 1,
    title: "간단한 신청 방법과 꿀팁",
    date: "2025.07.01",
    category: "육아휴직 급여 지원",
    ministry: "고용노동부",
  },
  {
    id: 2,
    title: "지원 자격과 필요 서류 정리",
    date: "2025.07.01",
    category: "아이돌봄서비스",
    ministry: "여성가족부",
  },
  {
    id: 3,
    title: "신청 후 처리기간 및 후기",
    date: "2025.07.01",
    category: "육아휴직 급여 지원",
    ministry: "고용노동부",
  },
  {
    id: 4,
    title: "추가 데이터 예시",
    date: "2025.07.02",
    category: "경력단절 여성 지원",
    ministry: "여성가족부",
  },
  {
    id: 5,
    title: "또 다른 후기",
    date: "2025.07.03",
    category: "양육수당",
    ministry: "보건복지부",
  },
];

function createReviewItem(review) {
  const li = document.createElement("li");
  li.className = "review_item";
  li.dataset.id = review.id;
  li.innerHTML = `
        <div class="review_top">
            후기 | ${review.category} | ${review.ministry} · ${review.date}
            <button class="review_menu_btn"></button>
            <ul class="review_menu">
                <li class="edit"><img src="/static/assets/img/pencil.png"> 수정</li>
                <li class="delete"><img src="/static/assets/img/del.png"> 삭제</li>
            </ul>
        </div>
        <div class="review_text">${review.title}</div>
    `;
  return li;
}

function renderPagination(currentPage, totalPages) {
  const pagination = document.querySelector(".pagination");
  pagination.innerHTML = "";

  // 이전 버튼
  const prev = document.createElement("button");
  prev.className = "prev_btn";
  prev.innerHTML = `<img src="/static/assets/img/prev_btn.png" alt="이전">`;
  prev.disabled = currentPage === 1;
  prev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderReviews(currentPage);
    }
  });
  pagination.appendChild(prev);

  // 숫자 버튼
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    if (i === currentPage) pageBtn.classList.add("active");
    pageBtn.addEventListener("click", () => {
      currentPage = i;
      renderReviews(currentPage);
    });
    pagination.appendChild(pageBtn);
  }

  // 다음 버튼
  const next = document.createElement("button");
  next.className = "prev_btn";
  next.innerHTML = `<img src="/static/assets/img/next_btn.png" alt="다음">`;
  next.disabled = currentPage === totalPages;
  next.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderReviews(currentPage);
    }
  });
  pagination.appendChild(next);
}

function renderReviews(page = 1) {
  const start = (page - 1) * reviewsPerPage;
  const end = start + reviewsPerPage;
  const pageItems = reviews.slice(start, end);

  const listEl = document.getElementById("review_list");
  const noReview = document.getElementById("no_review");

  listEl.innerHTML = "";
  if (pageItems.length === 0) {
    noReview.style.display = "block";
  } else {
    noReview.style.display = "none";
    pageItems.forEach((review) => listEl.appendChild(createReviewItem(review)));
  }

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  renderPagination(page, totalPages);
  attachReviewEvent();
}

function attachReviewEvent() {
  const reviewList = document.getElementById("review_list");
  const noReview = document.getElementById("no_review");

  reviewList.querySelectorAll(".review_menu_btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const menu = e.target
        .closest(".review_item")
        .querySelector(".review_menu");
      document
        .querySelectorAll(".review_menu")
        .forEach((m) => (m.style.display = "none"));
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  });

  reviewList.querySelectorAll(".edit").forEach((editBtn) => {
    editBtn.addEventListener("click", function (e) {
      alert("후기 수정 기능은 현재 준비 중입니다."); // 페이지 이동 제거
    });
  });

  reviewList.querySelectorAll(".delete").forEach((delBtn) => {
    delBtn.addEventListener("click", function (e) {
      if (confirm("정말 삭제하시겠습니까?")) {
        const reviewItem = e.target.closest(".review_item");
        const reviewId = Number(reviewItem.dataset.id);

        // 데이터에서 제거
        reviews = reviews.filter((r) => r.id !== reviewId);

        // 페이지 변경
        const maxPage = Math.ceil(reviews.length / reviewsPerPage);
        if (currentPage > maxPage) currentPage = maxPage;
        renderReviews(currentPage);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderReviews(currentPage);
});
