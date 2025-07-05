// "전체 동의" 체크박스를 클릭했을 때
document.getElementById('checkAll').addEventListener('change', function () {
    const isChecked = this.checked; // 전체 체크박스의 체크 상태 저장 (true/false)

    // 모든 개별 약관 체크박스를 전체 체크 상태에 맞춰 설정
    document.querySelectorAll('.terms').forEach(cb => {
        cb.checked = isChecked;
    });
});

// 개별 약관 체크박스를 클릭했을 때
document.querySelectorAll('.terms').forEach(cb => {
    cb.addEventListener('change', function () {
        const all = document.querySelectorAll('.terms').length;        // 전체 약관 항목 수
        const checked = document.querySelectorAll('.terms:checked').length; // 체크된 항목 수

        // 모든 항목이 체크되었으면 전체 체크박스도 체크, 아니면 해제
        document.getElementById('checkAll').checked = (all === checked);
    });
});
