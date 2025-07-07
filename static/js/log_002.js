// 헤더 상단 제목 클릭 시, main_002 화면으로 이동 
document.querySelector('.logo')?.addEventListener('click', function () {
    window.location.href = 'main_002.html'
});

// 전체 동의
document.getElementById('checkAll').addEventListener('change', function () {
    const isChecked = this.checked;
    document.querySelectorAll('.terms').forEach(cb => {
        cb.checked = isChecked;
    });
});

// 개별 약관 체크 시 전체 동의 상태 동기화
document.querySelectorAll('.terms').forEach(cb => {
    cb.addEventListener('change', function () {
        const all = document.querySelectorAll('.terms').length;
        const checked = document.querySelectorAll('.terms:checked').length;
        document.getElementById('checkAll').checked = (all === checked);
    });
});

// 다음 단계 버튼 클릭 시 유효성 검사
document.getElementById('signupBtn').addEventListener('click', function (e) {
    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelectorAll('input[type="password"]')[0].value.trim();
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert('모든 입력 항목을 작성해주세요.');
        e.preventDefault();
        return;
    }

    if (password.length < 8 || password.length > 20) {
        alert('비밀번호는 8~20자여야 합니다.');
        e.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        e.preventDefault();
        return;
    }

    const terms = document.querySelectorAll('.terms');
    if (!terms[0].checked || !terms[1].checked) {
        alert('필수 약관에 모두 동의해주세요.');
        e.preventDefault();
        return;
    }
});