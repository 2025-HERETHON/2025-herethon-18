from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password

# 로그인 페이지 : log_001
def login(request):
    if request.method == "POST":
        nickname = request.POST.get('username')  # HTML 폼에서의 name="username"
        password = request.POST.get('password')  # name="password"

        try:
            user = User.objects.get(nickname=nickname)  # 'username' 필드 맞는지 모델에서 확인 필요
        except User.DoesNotExist:
            messages.error(request, '존재하지 않는 사용자입니다.')
            return render(request, 'login/log_001.html')

            # 디버깅 로그
            print("입력된 패스워드:", password)
            print("DB에 저장된 패스워드:", user.password)
            print("check_password 결과:", check_password(password, user.password))

        if check_password(password, user.password):
            request.session['user_id'] = user.user_id
            request.session['name'] = user.nickname
            return redirect('main_002')  # 로그인 성공 시 메인 페이지
        else:
            messages.error(request, '비밀번호가 일치하지 않습니다.')
            return render(request, 'login/log_001.html')

    return render(request, 'login/log_001.html')

# 회원가입 1 페이지
def setting_1(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')

        if password != password2:
            messages.error(request, "비밀번호가 일치하지 않습니다.")
            return render(request, 'login/log_002.html')

        if User.objects.filter(email=email).exists():
            messages.error(request, "이미 사용 중인 이메일입니다.")
            return render(request, 'login/log_002.html')

        # 세션에 저장
        request.session['signup_info'] = {
            'name': name,
            'email': email,
            'password': make_password(password),  # 비밀번호는 해싱해서 저장
        }

        return redirect('log_003')  # 다음 페이지로
    return render(request, 'login/log_002.html')


# 회원가입 2 페이지
def setting_2(request):
    if request.method == "POST":
        signup_info = request.session.get('signup_info')

        if not signup_info:
            messages.error(request, "잘못된 접근입니다. 처음부터 다시 시도해주세요.")
            return redirect('setting_1')

        nickname = request.POST.get('nickname')
        birth_date = request.POST.get('birthdate')
        phone_number = request.POST.get('phone')
        age_group = request.POST.get('age_group')

        if User.objects.filter(nickname=nickname).exists():
            messages.error(request, "이미 사용 중인 닉네임입니다.")
            return render(request, 'login/log_003.html')

        # User 최종 저장
        user = User(
            name=signup_info['name'],
            email=signup_info['email'],
            password=signup_info['password'],
            nickname=nickname,
            birth_date=birth_date,
            phone_number=phone_number,
            age_group=age_group
        )
        user.save()

        # 세션 정리
        del request.session['signup_info']

        return redirect('log_001')
    return render(request, 'login/log_003.html')
