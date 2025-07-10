// 헤더 상단 제목 클릭 시, main_002 화면으로 이동
document.querySelector(".logo")?.addEventListener("click", function () {
  window.location.href = "/home/";
});

// 후기 쓰기 버튼 누르면 rev_002.html로 이동
document
  .querySelector(".rev-write-btn")
  ?.addEventListener("click", function () {
    window.location.href = "/review/create/";
  });

// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector(".mypage-btn")?.addEventListener("click", function () {
  window.location.href = "myp_001.html"; //수정예정
});

// 헤더 유저 닉네임으로 바뀌기 (더미데이터 사용)
/*const dummyLoginResponse = {
  accessToken: "eyJhbGciOiJIUzI1NiIs...",
  refreshToken: "eyJhbGciOiJIUzI1NiIs...",
  user: {
    userId: 12,
    nickname: "강아지가짱",
    ageRange: "대학생·청년",
  },
};*/

// localStorage에 저장 (세션 유지용)
localStorage.setItem("user", JSON.stringify(dummyLoginResponse.user));

document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user")); // 저장된 사용자 정보 불러오기
  const nicknameSpan = document.getElementById("user-nickname");

  if (userData && nicknameSpan) {
    nicknameSpan.textContent = userData.nickname;
  }
});
