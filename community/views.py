from django.shortcuts import render

# Create your views here.
def com_propose(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,  # user 전체 객체 전달
        'user_nickname': user.nickname,  # 따로 필요한 필드도 가능
    }
    return render(request, 'community/com_001.html', context)

def com_written(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,  # user 전체 객체 전달
        'user_nickname': user.nickname,  # 따로 필요한 필드도 가능
    }
    return render(request, 'community/com_002.html', context)

def com_create(request):
    user = request.user  # 로그인된 사용자

    context = {
        'user': user,  # user 전체 객체 전달
        'user_nickname': user.nickname,  # 따로 필요한 필드도 가능
    }
    return render(request, 'community/com_003.html', context)