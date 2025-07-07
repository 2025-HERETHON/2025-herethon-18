// mypage 만들어졌을 경우 사용
// 헤더 상단 닉네임 클릭 시, mypage(myp_001)로 이동
document.querySelector('.mypage-btn')?.addEventListener('click', function () {
    window.location.href = 'myp_001.html'
});

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('.category_btn').forEach(link => {
        const linkHref = link.getAttribute('href');

        if (linkHref && linkHref.endsWith(currentPage)) {
            link.classList.add('active');
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

// 좋아요 수를 누르면 높은 순서로 정렬
document.addEventListener("DOMContentLoaded", function () {
    const sortingBtn = document.querySelector(".sorting_like");
    const boardList = document.querySelector(".board_list");

    sortingBtn.addEventListener("click", function () {
        const items = Array.from(boardList.querySelectorAll(".board_item"));

        // 좋아요 수 기준 내림차순 정렬
        const sortedItems = items.sort((a, b) => {
            const aLikes = parseInt(a.querySelector(".icon_item.like .count").textContent, 10);
            const bLikes = parseInt(b.querySelector(".icon_item.like .count").textContent, 10);
            return bLikes - aLikes;
        });

        sortedItems.forEach((item, index) => {
            item.querySelector(".board_num").textContent = String(index + 1).padStart(2, '0');
            boardList.appendChild(item);
        });

    });
});



// 좋아요, 북마크 +1 & 이미지 교체
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".icon_item").forEach(icon => {
        icon.addEventListener("click", function () {
            const img = this.querySelector("img");
            const countSpan = this.querySelector(".count");
            const type = this.getAttribute("data-type");
            const isActive = this.classList.contains("active");

            let count = parseInt(countSpan.textContent);

            // 숫자 토글
            if (isActive) {
                this.classList.remove("active");
                count--;
            } else {
                this.classList.add("active");
                count++;
            }

            countSpan.textContent = count;

            // 이미지 파일 경로 변경
            let newSrc = "";

            if (type === "like") {
                newSrc = isActive
                    ? "/static/assets/img/like_btn.png"
                    : "/static/assets/img/full_heart_icon.png";
            } else if (type === "bookmark") {
                newSrc = isActive
                    ? "/static/assets/img/bookmark_icon.png"
                    : "/static/assets/img/full_bookmark_icon.png";
            }

            // 이미지 교체 (캐시 우회)
            img.src = newSrc + "?v=" + new Date().getTime();
        });
    });
});

//url 이동
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.board_item').forEach(item => {
        item.addEventListener('click', function (e) {
            // 좋아요/북마크 아이콘 클릭 시 이동 막기
            if (e.target.closest('.icon_item')) return;

            const targetUrl = item.dataset.url;
            if (targetUrl) {
                // 새 탭으로 열기
                window.open(targetUrl, '_blank');
            }
        });
    });
});
