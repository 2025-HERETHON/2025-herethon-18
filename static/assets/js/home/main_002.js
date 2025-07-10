// 헤더 상단 제목 클릭 시, main_002 화면으로 이동
document.querySelector(".logo")?.addEventListener("click", function () {
  window.location.href = "/home/";
});

// 상단 헤더 후기 버튼 클릭 시, rev_001로 이동
document.querySelector(".review-btn")?.addEventListener("click", function () {
  window.location.href = "/review/list/";
});

// 파란 박스 클릭 시, list_001 화면으로 이동
document
  .querySelector(".popular-box-wrapper")
  ?.addEventListener("click", function (e) {
    const ageGroup = e.currentTarget.dataset.age;
    if (ageGroup === "전연령") {
      window.location.href = "/policyList/list_001.html";
    } else if (ageGroup === "청소년") {
      window.location.href = "/policyList/list_teen.html";
    } else if (ageGroup === "영유아") {
      window.location.href = "/policyList/list_infant.html";
    } else if (ageGroup === "중장년") {
      window.location.href = "/policyList/list_middle.html";
    } else if (ageGroup === "대학생·청년") {
      window.location.href = "/policyList/list_youth.html";
    } else if (ageGroup === "노인") {
      window.location.href = "/policyList/list_elder.html";
    }
  });

// '생생한 후기 확인하기' 박스 하단 더보기 버튼 클릭 시, rev_001로 이동
document.querySelector(".rev-more")?.addEventListener("click", function () {
  window.location.href = "/review/list/";
});

// mypage 만들어졌을 경우 사용
// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector(".mypage-btn")?.addEventListener("click", function () {
  window.location.href = "myp_001.html";
});

// 각 그래프 클릭하면 해당하는 연령대 페이지로 이동
const agePages = {
  infant: "/home/infant",
  teen: "/home/teen",
  youth: "/home/youth",
  middle: "/home/middle",
  elder: "/home/elder",
};

document.querySelectorAll(".graph-item").forEach((item) => {
  item.addEventListener("click", () => {
    const ageKey = item.dataset.age;
    if (agePages[ageKey]) {
      window.location.href = agePages[ageKey];
    }
  });
});

// 후기 요약 카드 조회 (생생한 후기 확인하기) 더미 데이터 이용
const reviews = [
  {
    policy_id: 3,
    policy_name: "육아휴직 급여 지원",
    summary:
      "신청 방법이 이해를 잘 할 수 있도록 온라인으로 간편하게 신청 가능해서 너무 좋았어요. 주변의 젊은 육아부부들도...",
  },
  {
    policy_id: 8,
    policy_name: "여성새로일하기센터 운영",
    summary:
      "관련 대표님 및 직무연계 등에서 직접 체감할 수 있던 점이 좋았습니다. 전문적인 상담과 실업급여 활동을 들을 수...",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const reviewContainer = document.querySelector(".rev-bottom");

  reviews.forEach((review) => {
    const div = document.createElement("div");
    div.classList.add("rev");

    div.innerHTML = `
            <div class="rev-title">${review.policy_name}</div>
            <div class="rev-con">${review.summary}</div>
        `;

    reviewContainer.appendChild(div);
  });
});

// 헤더 유저 닉네임으로 바뀌기 (더미데이터 사용)
const dummyLoginResponse = {
  accessToken: "eyJhbGciOiJIUzI1NiIs...",
  refreshToken: "eyJhbGciOiJIUzI1NiIs...",
  user: {
    userId: 12,
    nickname: "강아지가짱",
    ageRange: "대학생·청년",
  },
};
// localStorage에 저장 (세션 유지용)
localStorage.setItem("user", JSON.stringify(dummyLoginResponse.user));

document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user")); // 저장된 사용자 정보 불러오기
  const nicknameSpan = document.getElementById("user-nickname");

  if (userData && nicknameSpan) {
    nicknameSpan.textContent = userData.nickname;
  }
});
