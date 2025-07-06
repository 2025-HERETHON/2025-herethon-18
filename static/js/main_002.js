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