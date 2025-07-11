// 헤더 상단 제목 클릭 시, main_002 화면으로 이동 
document.querySelector('.logo')?.addEventListener('click', function () {
    window.location.href = 'main_002.html'
});

// 상단 헤더 후기 버튼 클릭 시, rev_001로 이동
document.querySelector('.review-btn')?.addEventListener('click', function () {
    window.location.href = 'rev_001.html'
});

// 상단 헤더 커뮤니티 버튼 클릭 시, com_001로 이동
document.querySelector('.com-btn')?.addEventListener('click', function () {
    window.location.href = 'com_001.html'
});

// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function () {
    window.location.href = 'myp_001.html'
});


document.addEventListener("DOMContentLoaded", () => {
    const likePageBody = document.querySelector(".scrap_page_body");

    // 더미 데이터
    const dummyPolicyResponse = {
        "count": 1,
        "results": [
            {
                "policy_id": 3,
                "policy_name": "대학생 등록금 지원",
                "department": "교육부",
                "age_group": "대학생·청년",
                "like_count": 777,
                "scrap_count": 200,
                "review_count": 70,
                "created_at": "2025-07-05T10:40:00Z"
            },
            {
                "policy_id": 3,
                "policy_name": "육아휴직 급여 지원",
                "department": "고용노동부",
                "age_group": "대학생·청년",
                "like_count": 700,
                "scrap_count": 190,
                "review_count": 60,
                "created_at": "2025-07-06T10:40:00Z"
            }
        ]
    };

    // 동적으로 목록 추가
    dummyPolicyResponse.results.forEach((policy) => {
        const item = document.createElement("div");
        item.className = "body_list";
        item.dataset.policyId = policy.policy_id;

        item.innerHTML = `
        <div class="list_left">
            <div class="list_title">${policy.policy_name}</div>
            <div class="list_subtitle">${policy.department}</div>
        </div>
        <div class="list_icons">
            <div class="like-box">
            <img src="../assets/img/Nlucide_1.png" class="like-icon" />
            <span class="like_num">${policy.like_count}</span>
            </div>
            <div class="scrap-box">
            <img src="../assets/img/lucide.svg" />
            <span class="scrap_num">${policy.scrap_count}</span>
            </div>
        </div>
        `;

        likePageBody.appendChild(item);
    })
});

