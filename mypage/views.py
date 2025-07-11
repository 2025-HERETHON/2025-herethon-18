from django.shortcuts import render
from login.models import User
from django.contrib.auth.decorators import login_required

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



@login_required
def mypage_view(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,  # user 전체 객체 전달
        'user_nickname': user.nickname,  # 따로 필요한 필드도 가능
    }
    return render(request, 'mypage/mypage.html', context)

def mypage_likeList(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,  # user 전체 객체 전달
        'user_nickname': user.nickname,  # 따로 필요한 필드도 가능
    }
    return render(request, 'mypage/mypage_005.html', context)

def mypage_scrapList(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,  # user 전체 객체 전달
        'user_nickname': user.nickname,  # 따로 필요한 필드도 가능
    }
    return render(request, 'mypage/mypage_007.html', context)


