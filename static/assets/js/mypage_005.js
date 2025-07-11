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
    window.location.href = 'com_001.html'
});

// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function () {
    window.location.href = '/mypage/'
});

document.addEventListener("DOMContentLoaded", () => {
    const likePageBody = document.querySelector(".like_page_body");

    // 더미 데이터
    const dummyPolicyResponse = {
        "count": 2,
        "results": [
            {
                "policy_id": 1,
                "policy_name": "육아휴직 급여 지원",
                "department": "고용노동부",
                "like_count": 999,
                "scrap_count": 999
            },
            {
                "policy_id": 2,
                "policy_name": "청소년 심리상담 지원",
                "department": "여성가족부",
                "like_count": 500,
                "scrap_count": 300
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
            <img src="/static/assets/img/Nlucide.svg" class="like-icon" />
            <span class="like_num">${policy.like_count}</span>
            </div>
            <div class="scrap-box">
            <img src="/static/assets/img/lucide.png" />
            <span class="scrap_num">${policy.scrap_count}</span>
            </div>
        </div>
        `;

        likePageBody.appendChild(item);
    })
});