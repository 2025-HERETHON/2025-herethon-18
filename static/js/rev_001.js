// 헤더 상단 제목 클릭 시, main_002 화면으로 이동 
document.querySelector('.logo')?.addEventListener('click', function () {
    window.location.href = 'main_002.html'
});

// 후기 쓰기 버튼 누르면 rev_002.html로 이동
document.querySelector('.rev-write-btn')?.addEventListener('click', function () {
    window.location.href='rev_002.html'
});

// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function(){
    window.location.href='myp_001.html'
});

// 상단 헤더 커뮤니티 버튼 클릭 시, com_001로 이동
document.querySelector('.com-btn')?.addEventListener('click', function () {
    window.location.href='com_001.html'
});

// 페이지 완전히 로드된 후 실행 
document.addEventListener("DOMContentLoaded", function(){
    const reviewListEl = document.getElementById("review-list");
    // 임시 사용 더미 데이터
    const dummyData = {
        "count": 53,
        "page": 1,
        "page_size": 4,
        "results": [
            {
            "review_id": 23,
            "policy": {
                "policy_id": 3,
                "policy_name": "육아휴직 급여 지원",
            },
            "title": "간단한 신청 방법과 꿀팁",
            "content": "신청 방법이 어려운 줄 알았는데 온라인으로 간편하게 신청 가능해서 너무 좋았어요. 주의할 점은 육아휴직을 30일 이상 사용해야 합니다! 그리고 휴직이 끝난 날 이후 12개월 이내로 신청해야 합니다. 제출서류는 육아휴직 증명서를 구비해야 해서 회사에 요청하시면 됩니다. 육아휴직 급여 지원 덕분에 마음 놓고 양육에 집중할 수 있었어요! 회사 생활 병행하시는 분들은 꼭 신청하세요!",
            "user": {
                "nickname": "강아지가 멍멍"
            },
            "created_at": "2025.07.01"
            },
            {
            "review_id": 22,
            "policy": {
                "policy_id": 5,
                "policy_name": "여성새로일하기센터 운영",
            },
            "title": "간단한 신청 방법과 꿀팁",
            "content": "신청 방법이 어려운 줄 알았는데 온라인으로 간편하게 신청 가능해서 너무 좋았어요. 주의할 점은 육아휴직을 30일 이상 사용해야 합니다! 그리고 휴직이 끝난 날 이후 12개월 이내로 신청해야 합니다. 제출서류는 육아휴직 증명서를 구비해야 해서 회사에 요청하시면 됩니다. 육아휴직 급여 지원 덕분에 마음 놓고 양육에 집중할 수 있었어요! 회사 생활 병행하시는 분들은 꼭 신청하세요!",
            "user": {
                "nickname": "고양이가 야옹"
            },
            "created_at": "2025.07.01"
            },
        ]
    };

    dummyData.results.forEach((review) => {
        // 새 div 요소 만들기 
        const card = document.createElement("div");
        card.className = "rev-card";

        // card 내부에 HTML 구조 채우기
        card.innerHTML = `
            <div class="rev-header">
                <h3 class="rev-title">${review.policy.policy_name}</h3>
            </div>
            <div class="rev-body">
                <p class="rev-subtitle">${review.title}</p>
                <p class="rev-content">${review.content}</p>
                <div class="rev-footer">
                    <span class="rev-date">${review.created_at}</span>
                    <span class="rev-writer">${review.user.nickname}</span>
                </div>
            </div>
        `;

        // 완성된 카드 요소를 reviewListEL에 추가하여 화면에 표시
        reviewListEl.appendChild(card);
    })
});


