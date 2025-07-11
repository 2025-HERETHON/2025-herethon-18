# 2025-herethon-18
2025 여기톤 : HER+ETHON 18팀

## 서비스 소개
<img width="3840" height="2160" alt="image" src="https://github.com/user-attachments/assets/eaab2abb-da14-4aa1-adca-f462dcad2e88" />


<서울 여성의 삶의 질을 **높이는** 참여형 복지 플랫폼, **Elevate**:Seoul>

Elevate:Seoul은 여성의 생애주기별 맞춤 복지 정보를 쉽고 빠르게 확인하고, 후기·멘토링·정책 제안 커뮤니티를 통해 사용자가 직접 참여할 수 있는 복지 플랫폼입니다.

정보가 흩어져 있거나 나에게 해당되는지 판단하기 어려운 기존 복지 구조의 한계를 해결하고자, 생애주기 기반 복지 리스트와 공고 수 시각화 그래프를 통해 이용자에겐 접근성을, 정책 설계자에겐 인사이트를 제공합니다.

“Elevate:Seoul은 모두의 복지에 모두가 닿을 수 있도록, 서울 여성의 삶을 함께 높입니다.”

## 기술 스택

복붙 

## 팀원 소개, 역할 분담

- 기디
    - 김채연: 기획, 화면 디자인, 발표자료 제작, 발표
- 프론트엔드
    - 정지은: 로그인 페이지, 리스트 페이지, 커뮤니티 페이지, 메인 마이페이지
    
    <img width="150" height="736" alt="image" src="https://github.com/user-attachments/assets/83000980-a5b3-4ceb-9814-880b01b9aad6" />

    
    - 최연서: 연령별 메인 페이지, 후기 페이지,  마이페이지 내부 활동 페이지
    
    <img width="150" height="862" alt="image" src="https://github.com/user-attachments/assets/27f7cc84-1e2c-4b42-b614-bb980eaff18d" />

    
- 백엔드
    - 김연우: 전체 모델 구성**,** 후기 페이지, 리스트 페이지, 메인 페이지의 후속 페이지, 마이 페이지의 유저별 정보/좋아요/스크랩 구현 및 db 연결
    
    <img width="150" height="420" alt="image" src="https://github.com/user-attachments/assets/79370a46-2afc-4999-b578-576eb568ba14" />

    
    - 정유진: 커뮤니티 페이지, 로그인, 회원가입 페이지, 메인 페이지, 마이 페이지의 유저별 정보/좋아요/스크랩 구현 및 db 연결
    
    <img width="150" height="460" alt="image" src="https://github.com/user-attachments/assets/16e6b3f0-e40e-4094-95d1-9beb21729bac" />

    

## 폴더 구조

```python
📂 2025-herethon-18
├─ 📁 community
│ ├─ init.py
│ ├─ admin.py
│ ├─ apps.py
│ ├─ models.py
│ ├─ tests.py
│ ├─ urls.py
│ └─ views.py
│
├─ 📁 config
│ ├─ init.py
│ ├─ asgi.py
│ ├─ settings.py
│ ├─ urls.py
│ └─ wsgi.py
│
├─ 📁 home
│ ├─ init.py
│ ├─ admin.py
│ ├─ apps.py
│ ├─ models.py
│ ├─ tests.py
│ ├─ urls.py
│ └─ views.py
│
├─ 📁 login
│ ├─ init.py
│ ├─ admin.py
│ ├─ apps.py
│ ├─ models.py
│ ├─ tests.py
│ ├─ urls.py
│ └─ views.py
│
├─ 📁 mypage
│ ├─ init.py
│ ├─ admin.py
│ ├─ apps.py
│ ├─ models.py
│ ├─ tests.py
│ ├─ urls.py
│ └─ views.py
│
├─ 📁 policyList
│ ├─ init.py
│ ├─ admin.py
│ ├─ apps.py
│ ├─ models.py
│ ├─ tests.py
│ ├─ urls.py
│ └─ views.py
│
├─ 📁 review
│ ├─ admin.py
│ ├─ apps.py
│ ├─ forms.py
│ ├─ models.py
│ ├─ tests.py
│ ├─ urls.py
│ └─ views.py
│
├─ 📁 static
│ └─ 📁 assets
│ ├─ 📁 css
│ ├─ 📁 image
│ ├─ 📁 img
│ └─ 📁 js
│ ├─ 📁 community
│ ├─ 📁 home
│ ├─ 📁 login
│ ├─ list.js
│ ├─ mypage.js
│ ├─ mypage_005.js
│ ├─ mypage_007.js
│ ├─ rev_001.js
│ └─ rev_002.js
│
├─ 📁 templates
│ ├─ 📁 community
│ ├─ 📁 home
│ ├─ 📁 login
│ ├─ 📁 mypage
│ ├─ 📁 policyList
│ └─ 📁 review
│
├─ main.py
├─ manage.py
├─ README.md
├─ requirements.txt
```

## 🌱 **개발환경 실행 방법 (macOS/Linux 기준)**

> Windows 사용자는 괄호 안의 명령어 참고
> 
1. **프로젝트 클론**

```bash
git clone https://github.com/2025-HERETHON/2025-herethon-18.git
cd 2025-herethon-18
```

1. **가상환경 생성 및 활성화**

```bash
python3 -m venv venv       # (Windows: python -m venv venv)
source venv/bin/activate   # (Windows: venv\Scripts\activate)
```

1. **필수 패키지 설치**

```bash
pip install -r requirements.txt
```

1. **`settings.py`에서 데이터베이스 설정 변경**
    
    (기존 MySQL → SQLite로 교체)
    

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / "db.sqlite3",
    }
}
```

### 5. **마이그레이션 적용**

```bash
python manage.py makemigrations
python manage.py migrat
```

---

### 6. **관리자 계정 생성**

```bash
python manage.py createsuperu
```

> 사용자명, 이메일, 비밀번호를 입력해 계정을 만듭니다.
> 

---

### 7. **개발 서버 실행**

```bash
python3 manage.py runserver   # (Windows: python manage.py runserver)
```

> 브라우저에서 http://127.0.0.1:8000/ 접속
> 
> 
> `http://127.0.0.1:8000/admin/` 에서 관리자 페이지 확인 가능
>
