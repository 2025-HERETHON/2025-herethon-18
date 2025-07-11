document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.login_btn_submit');

  loginButton.addEventListener('click', async () => {
    const id = document.querySelector('.login_id').value;
    const pw = document.querySelector('.login_password').value;

    if (!id || !pw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, pw })
      });

      const result = await response.json();

      if (result.success) {
        // 로그인 성공 시 이동
        window.location.href = '/static/html/main_002.html';
      } else {
        alert(result.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  });
});