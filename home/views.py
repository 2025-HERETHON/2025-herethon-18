from django.shortcuts import render
from policyList.models import Policy
from review.models import Review
from login.models import User  # 홈 헤더에 연령대 표시


def home(request):
    return render(request, 'home/main_002.html')