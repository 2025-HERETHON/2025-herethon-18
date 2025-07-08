from django.shortcuts import render

# 로그인 페이지 : log_001
def login(request):
    return render(request, 'login/log_001.html')

# 회원가입 1 페이지 : log_002
def setting_1(request):
    return render(request, 'login/log_002.html')

# 회원가입 2 페이지 : log_003
def setting_2(request):
    return render(request, 'login/log_003.html')