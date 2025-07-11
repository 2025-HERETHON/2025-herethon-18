from django.shortcuts import render
from login.models import User
from policyList.models import Policy, Like, Scrap
from django.contrib.auth.decorators import login_required
from django.db.models import Count

# Create your views here.
# def mypage(request):
#     user_nickname = ''
#     if request.user.is_authenticated:
#         try:
#             user = User.objects.get(pk=request.user.pk)
#             user_nickname = user.nickname
#         except User.DoesNotExist:
#             user_nickname = 'Unknown'

#     context = {
#         'user_nickname': user_nickname,
#     }

#     return render(request, 'mypage/mypage.html', context)


# 마이페이지 메인 화면
@login_required
def mypage_view(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,
        'user_nickname': user.nickname,
    }
    return render(request, 'mypage/mypage.html', context)
@login_required
def mypage_likeList(request):
    user = request.user

    liked_policies = Policy.objects.filter(
        policylist_policy_likes__user=user
    ).distinct()

    context = {
        'user': user,
        'user_nickname': user.nickname,
        'liked_policies': liked_policies,
    }
    return render(request, 'mypage/mypage_005.html', context)


@login_required
def mypage_scrapList(request):
    user = request.user

    scrapped_policies = Policy.objects.filter(
        policylist_policy_scraps__user=user
    ).distinct()

    context = {
        'user': user,
        'user_nickname': user.nickname,
        'scrapped_policies': scrapped_policies,
    }
    return render(request, 'mypage/mypage_007.html', context)
