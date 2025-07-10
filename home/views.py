from django.shortcuts import render
from policyList.models import Policy
from review.models import Review
from login.models import User  # 홈 헤더에 연령대 표시

def home(request):
    return render(request, 'home/main_002.html')

def home_infant(request):
    return render(request, 'home/main_infant.html')

def home_teen(request):
    return render(request, 'home/main_teen.html')

def home_youth(request):
    return render(request, 'home/main_youth.html')

def home_middle(request):
    return render(request, 'home/main_middle.html')

def home_elder(request):
    return render(request, 'home/main_elder.html')