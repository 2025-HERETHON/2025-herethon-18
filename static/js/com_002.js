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

document.addEventListener("DOMContentLoaded", function () {
    // 모든 삭제 버튼에 이벤트 바인딩
    document.querySelectorAll(".del_com").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // 기본 동작 차단 (폼일 경우 대비)
            e.stopPropagation(); // 부모 이벤트 막기

            // 확인창
            const confirmDelete = confirm("정말 삭제하시겠습니까?");
            if (!confirmDelete) return;

            // 가장 가까운 카드(.rev-card) 삭제
            const card = this.closest(".rev-card");
            if (card) {
                card.remove();
            }
        });
    });
});

// 페이지 이동
document.querySelector(".tab-link_1")?.addEventListener("click", () => {
    window.location.href = "/static/html/com_001.html"; // 커뮤니티로 이동
});

