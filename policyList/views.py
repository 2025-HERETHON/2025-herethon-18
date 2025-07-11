from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from policyList.models import *
from django.core.paginator import Paginator
from django.views.decorators.http import require_POST
from django.http import JsonResponse
import json


# Create your views here.

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


@require_POST
def toggle_like(request):
    if not request.user.is_authenticated:
        return JsonResponse({'error': '로그인이 필요합니다.'}, status=401)

    try:
        data = json.loads(request.body)
        policy_id = data.get('postId')
        action = data.get('action')  # "like" or "unlike"

        policy = get_object_or_404(Policy, pk=policy_id)
        like, created = Like.objects.get_or_create(user=request.user, policy=policy)

        if action == 'like' and created:
            policy.like_count += 1
            policy.save()
        elif action == 'unlike' and not created:
            like.delete()
            policy.like_count = max(0, policy.like_count - 1)
            policy.save()

        return JsonResponse({'like_count': policy.like_count})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
    

@require_POST
def toggle_bookmark(request):
        if not request.user.is_authenticated:
            return JsonResponse({'error': '로그인이 필요합니다.'}, status=401)

        try:
            data = json.loads(request.body)
            policy_id = data.get('postId')
            action = data.get('action')

            policy = get_object_or_404(Policy, pk=policy_id)
            scrap, created = Scrap.objects.get_or_create(user=request.user, policy=policy)

            if action == 'like' and created:
                policy.scrap_count += 1
                policy.save()
            elif action == 'unlike' and not created:
                scrap.delete()
                policy.scrap_count = max(0, policy.scrap_count - 1)
                policy.save()

            return JsonResponse({'scrap_count': policy.scrap_count})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    
