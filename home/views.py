from django.shortcuts import render
from policyList.models import Policy
from review.models import Review
from login.models import User  # 홈 헤더에 연령대 표시

def home(request):
    # 좋아요 많은 순으로 정책 5개 가져오기
    popular_policies = Policy.objects.order_by('-like_count')[:5]
    review_cards = Review.objects.order_by("-created_at")[:2]

    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'popular_policies': popular_policies,
        'review_cards': review_cards,
        'user_nickname': user_nickname,
    }

    return render(request, 'home/main_002.html', context)

def home_infant(request):
    popular_policies = Policy.objects.filter(age_group='영유아').order_by('-like_count')[:5]
    review_cards = Review.objects.order_by("-created_at")[:2]

    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'popular_policies': popular_policies,
        'review_cards': review_cards,
        'user_nickname': user_nickname,
    }

    return render(request, 'home/main_infant.html', context)


def home_teen(request):
    popular_policies = Policy.objects.filter(age_group='청소년').order_by('-like_count')[:5]
    review_cards = Review.objects.order_by("-created_at")[:2]

    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'popular_policies': popular_policies,
        'review_cards': review_cards,
        'user_nickname': user_nickname,
    }

    return render(request, 'home/main_teen.html', context)


def home_youth(request):
    popular_policies = Policy.objects.filter(age_group='대학생·청년').order_by('-like_count')[:5]
    review_cards = Review.objects.order_by("-created_at")[:2]

    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'popular_policies': popular_policies,
        'review_cards': review_cards,
        'user_nickname': user_nickname,
    }

    return render(request, 'home/main_youth.html', context)


def home_middle(request):
    popular_policies = Policy.objects.filter(age_group='중장년').order_by('-like_count')[:5]
    review_cards = Review.objects.order_by("-created_at")[:2]

    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'popular_policies': popular_policies,
        'review_cards': review_cards,
        'user_nickname': user_nickname,
    }

    return render(request, 'home/main_middle.html', context)


def home_elder(request):
    popular_policies = Policy.objects.filter(age_group='노인').order_by('-like_count')[:5]
    review_cards = Review.objects.order_by("-created_at")[:2]

    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    context = {
        'popular_policies': popular_policies,
        'review_cards': review_cards,
        'user_nickname': user_nickname,
    }

    return render(request, 'home/main_elder.html', context)