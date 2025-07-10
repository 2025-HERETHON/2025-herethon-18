from django.shortcuts import render
from login.models import User


# Create your views here.
def mypage(request):
    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'user_nickname': user_nickname,
    }

    return render(request, 'mypage/mypage.html', context)
