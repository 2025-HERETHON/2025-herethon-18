from django.shortcuts import render

def login(request):
    return render(request, 'login/log_001.html')

def setting_1(request):
    return render(request, 'login/log_002.html')

def setting_2(request):
    return render(request, 'login/log_003.html')