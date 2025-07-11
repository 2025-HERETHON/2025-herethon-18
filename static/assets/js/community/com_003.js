// 헤더 상단 제목 클릭 시, main_002 화면으로 이동
document.querySelector('.logo')?.addEventListener('click', function () {
    window.location.href = '/home/'
});

// 상단 헤더 후기 버튼 클릭 시, rev_001로 이동
document.querySelector('.review-btn')?.addEventListener('click', function () {
    window.location.href = '/review/list/'
});

// 상단 헤더 커뮤니티 버튼 클릭 시, com_001로 이동
document.querySelector('.com-btn')?.addEventListener('click', function () {
    window.location.href = '/community/'
});

// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function () {
    window.location.href = '/mypage/'
});

// 등록하기 버튼 클릭 → 커뮤니티 메인 페이지로 이동
document.querySelector('#write-upload-btn')?.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 form 제출 막기 (form 태그 안에 있을 경우)
    window.location.href = '/community/';
});

// 취소 버튼 클릭 → 이전 페이지로 이동
document.querySelector('#write-cancel-btn')?.addEventListener('click', function () {
    history.back(); // 또는 window.location.href = 'com_001.html';
});