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

// 3. 글쓰기 버튼 클릭 시 이동
document.querySelector(".com_write-btn")?.addEventListener("click", () => {
    window.location.href = "/static/html/com_003.html"; // 글쓰기 페이지로 이동
});
