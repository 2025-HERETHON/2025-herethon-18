// 상단 헤더 후기 버튼 클릭 시, rev_001로 이동
document.querySelector('.review-btn')?.addEventListener('click', function () {
    window.location.href = 'rev_001.html'
});

// 헤더 상단 제목 클릭 시, main_002 화면으로 이동 
document.querySelector('.logo')?.addEventListener('click', function () {
    window.location.href = 'main_002.html'
});

// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function () {
    window.location.href = 'myp_001.html'
});

// 상단 헤더 커뮤니티 버튼 클릭 시, com_001로 이동
document.querySelector('.com-btn')?.addEventListener('click', function () {
    window.location.href = 'com_001.html'
});
// 헤더 유저 닉네임으로 바뀌기 (더미데이터 사용)
const dummyLoginResponse = {
    accessToken: "eyJhbGciOiJIUzI1NiIs...",
    refreshToken: "eyJhbGciOiJIUzI1NiIs...",
    user: {
        userId: 12,
        nickname: "강아지가짱",
        ageRange: "대학생·청년"
    }
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