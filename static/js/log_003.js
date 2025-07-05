// 연령대 선택시 색상 변경
document.addEventListener('DOMContentLoaded', () => {
  const ageButtons = document.querySelectorAll('.age_btn');

  ageButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 기존 선택 해제
      ageButtons.forEach(btn => btn.classList.remove('active'));
      // 현재 클릭한 버튼만 선택
      button.classList.add('active');
    });
  });
});