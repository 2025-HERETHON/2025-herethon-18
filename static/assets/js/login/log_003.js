// 헤더 상단 제목 클릭 시, main_002 화면으로 이동
document.querySelector(".logo")?.addEventListener("click", function () {
  window.location.href = "/home/";
});

document.addEventListener("DOMContentLoaded", () => {
  const ageButtons = document.querySelectorAll(".age_btn");
  let selectedAge = "";

  ageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ageButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      selectedAge = button.textContent;
    });
  });

  document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault(); // 폼 기본 제출 막기 (JS 유효성검사 후 수동 제출)

    const nickname = document.querySelectorAll(".input_box")[0].value.trim();
    const birth = document.querySelectorAll(".input_box")[1].value.trim();
    const phone = document.querySelectorAll(".input_box")[2].value.trim();

    if (nickname.length < 3) {
      alert("닉네임은 3자리 이상 입력해주세요.");
      return;
    }

    if (!/^\d{8}$/.test(birth)) {
      alert("생년월일은 숫자 8자리 (YYYYMMDD)로 입력해주세요.");
      return;
    }

    if (!/^\d{10,11}$/.test(phone)) {
      alert("휴대폰 번호는 '-' 제외하고 숫자 10~11자리를 입력해주세요.");
      return;
    }

    if (!selectedAge) {
      alert("연령대를 선택해주세요.");
      return;
    }

    document.getElementById("selectedAge").value = selectedAge.trim();

    // 유효성 통과 → form submit
    document.getElementById("profileForm").submit();
  });
});
