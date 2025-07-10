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
