from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from policyList.models import *
from django.core.paginator import Paginator
from django.views.decorators.http import require_POST
from django.http import JsonResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from policyList.models import Policy  # 북마크 대상


# Create your views here.
def policy_list(request):
    user = request.user
    policies = Policy.objects.all()

    for policy in policies:
        policy.user_has_liked = Like.objects.filter(user=user, policy=policy).exists()
        policy.user_has_bookmarked = Scrap.objects.filter(user=user, policy=policy).exists()

    return render(request, "your_template.html", {"policies": policies})

def policy_list_middle(request):
    # 정렬 기준으로 정책 가져오기
    policies = Policy.objects.filter(age_group='중장년').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    user_nickname = ''
    if request.user.is_authenticated:
        user_nickname = getattr(request.user, 'nickname', 'Unknown')

    context = {
        'page_obj': page_obj,
        'policies': page_obj.object_list,
        'user_nickname': user_nickname,
    }
    return render(request, 'policyList/list_middle.html', context)

# 영유아
def policy_list_infant(request):
    policies = Policy.objects.filter(age_group='영유아').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    user_nickname = ''
    if request.user.is_authenticated:
        user_nickname = getattr(request.user, 'nickname', 'Unknown')

    context = {
        'page_obj': page_obj,
        'policies': page_obj.object_list,
        'user_nickname': user_nickname,
    }
    return render(request, 'policyList/list_infant.html', context)

# 청소년
def policy_list_teen(request):
    policies = Policy.objects.filter(age_group='청소년').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    user_nickname = ''
    if request.user.is_authenticated:
        user_nickname = getattr(request.user, 'nickname', 'Unknown')

    context = {
        'page_obj': page_obj,
        'policies': page_obj.object_list,
        'user_nickname': user_nickname,
    }
    return render(request, 'policyList/list_teen.html', context)

# 대학생·청년
def policy_list_youth(request):
    policies = Policy.objects.filter(age_group='대학생·청년').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    user_nickname = ''
    if request.user.is_authenticated:
        user_nickname = getattr(request.user, 'nickname', 'Unknown')

    context = {
        'page_obj': page_obj,
        'policies': page_obj.object_list,
        'user_nickname': user_nickname,
    }
    return render(request, 'policyList/list_youth.html', context)

# 노인
def policy_list_elder(request):
    policies = Policy.objects.filter(age_group='노인').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    user_nickname = ''
    if request.user.is_authenticated:
        user_nickname = getattr(request.user, 'nickname', 'Unknown')

    context = {
        'page_obj': page_obj,
        'policies': page_obj.object_list,
        'user_nickname': user_nickname,
    }
    return render(request, 'policyList/list_elder.html', context)

def policy_list_all(request):
    policies = Policy.objects.filter(age_group='전연령').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    user_nickname = ''
    if request.user.is_authenticated:
        user_nickname = getattr(request.user, 'nickname', 'Unknown')

    context = {
        'page_obj': page_obj,
        'policies': page_obj.object_list,
        'user_nickname': user_nickname,
    }
    return render(request, 'policyList/list_001.html', context)


@csrf_exempt
def toggle_like(request):
    if request.method == "POST":
        data = json.loads(request.body)
        post_id = data.get("postId")
        user = request.user

        try:
            policy = Policy.objects.get(pk=post_id)
            like, created = Like.objects.get_or_create(user=user, policy=policy)

            if created:
                policy.like_count += 1
                status = "liked"
            else:
                like.delete()
                policy.like_count = max(0, policy.like_count - 1)
                status = "unliked"

            policy.save()
            return JsonResponse({
                "status": "ok",
                "like_status": status,
                "like_count": policy.like_count
            })

        except Policy.DoesNotExist:
            return JsonResponse({"status": "error", "message": "정책 없음"}, status=404)

    return JsonResponse({"status": "error", "message": "POST만 허용됨"}, status=405)


@csrf_exempt
def toggle_bookmark(request):
    if request.method == "POST":
        data = json.loads(request.body)
        post_id = data.get("postId")
        user = request.user

        try:
            policy = Policy.objects.get(pk=post_id)
            scrap, created = Scrap.objects.get_or_create(user=user, policy=policy)

            if created:
                policy.scrap_count += 1
                status = "bookmarked"
            else:
                scrap.delete()
                policy.scrap_count = max(0, policy.scrap_count - 1)
                status = "unbookmarked"

            policy.save()
            return JsonResponse({
                "status": "ok",
                "bookmark_status": status,
                "scrap_count": policy.scrap_count
            })

        except Policy.DoesNotExist:
            return JsonResponse({"status": "error", "message": "정책 없음"}, status=404)

    return JsonResponse({"status": "error", "message": "POST만 허용됨"}, status=405)