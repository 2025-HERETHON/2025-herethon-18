// 상단 헤더 후기 버튼 클릭 시, rev_001로 이동
document.querySelector('.review-btn')?.addEventListener('click', function () {
    window.location.href='rev_001.html'
});

// 파란 박스 클릭 시, list_001 화면으로 이동
document.querySelector('.popular-box-wrapper')?.addEventListener('click', function (){
    window.location.href='list_001.html'
});

// '생생한 후기 확인하기' 박스 하단 더보기 버튼 클릭 시, rev_001로 이동
document.querySelector('.rev-more')?.addEventListener('click', function() {
    window.location.href='rev_001.html'
});

// mypage 만들어졌을 경우 사용
// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function(){
    window.location.href='myp_001.html'
});


// 각 그래프 클릭하면 해당하는 연령대 페이지로 이동
const agePages = {
    infant: 'main_infant.html',
    teen: 'main_teen.html',
    youth: 'main_youth.html',
    middle: 'main_middle.html',
    elder: 'main_elder.html'
};

document.querySelectorAll('.graph-item').forEach(item => {
    item.addEventListener('click', () => {
        const ageKey = item.dataset.age; 
        if (agePages[ageKey]) {
        window.location.href = agePages[ageKey];
        }
    });
});


// 전연령 관심 복지 리스트 조회 (더미 데이터) 
const policies = [
    {
        "policy_id": 3,
        "policy_name": "육아휴직 급여 지원",
        "like_count": 124
    },
    {
        "policy_id": 5,
        "policy_name": "아이돌봄서비스",
        "like_count": 97
    },
    {
        "policy_id": 8,
        "policy_name": "여성청소년 생리용품 바우처 지원",
        "like_count": 80
    },
    {
        "policy_id": 7,
        "policy_name": "여성새로일하기센터 운영",
        "like_count": 12
    },
    {
        "policy_id": 9,
        "policy_name": "온라인 여성경력개발센터(꿈날개) 운영",
        "like_count": 9
    },
];

document.addEventListener("DOMContentLoaded", function(){
    const policyList = document.querySelector(".popular-list");

    policies
        // 좋아요 수 높은 순서대로 정렬 
        .sort((a,b) => b.like_count - a.like_count)
        // 정렬된 항목 중 상위 5개 선택 -> 5개 정책만 화면에 표시
        .slice(0,5)

        // 각 정책 정보 <li> 생성해서 .popular-list에 추가
        .forEach((policy, index) => {
            const li = document.createElement("li");
            // 좋아요 수를 data 속성으로 설정
            li.setAttribute("data-likes", policies.like_count)
            li.innerHTML = `
                <span class="pop-rank">${String(index+1).padStart(2, "0")}</span>
                <span class="pop-desc">${policy.policy_name}</span>
                <span class="pop-like-number"><img src="../assets/img/heart.png">${policy.like_count}</span>
            `
            
            // 완성된 li 요소를 ul인 .popular-list에 추가
            policyList.appendChild(li);
        })
});


// 후기 요약 카드 조회 (생생한 후기 확인하기) 더미 데이터 이용
const reviews = [
    {
        "policy_id": 3,
        "policy_name": "육아휴직 급여 지원",
        "summary": "신청 방법이 이해를 잘 할 수 있도록 온라인으로 간편하게 신청 가능해서 너무 좋았어요. 주변의 젊은 육아부부들도..."
    },
    {
        "policy_id": 8,
        "policy_name": "여성새로일하기센터 운영",
        "summary": "관련 대표님 및 직무연계 등에서 직접 체감할 수 있던 점이 좋았습니다. 전문적인 상담과 실업급여 활동을 들을 수..."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const reviewContainer = document.querySelector(".rev-bottom");
    
    reviews.forEach(review => {
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