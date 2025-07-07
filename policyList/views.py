from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from policyList.models import *
from django.core.paginator import Paginator


# Create your views here.

def policy_list_middle(request):
    # 정렬 기준으로 정책 가져오기
    policies = Policy.objects.filter(age_group='중장년').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'policyList/list_middle.html', {'page_obj': page_obj, 'policies': page_obj.object_list })


# 영유아
def policy_list_infant(request):
    policies = Policy.objects.filter(age_group='영유아').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'policyList/list_infant.html', {'page_obj': page_obj, 'policies': page_obj.object_list })

# 청소년
def policy_list_teen(request):
    policies = Policy.objects.filter(age_group='청소년').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'policyList/list_teen.html', {'page_obj': page_obj, 'policies': page_obj.object_list })

# 대학생·청년
def policy_list_youth(request):
    policies = Policy.objects.filter(age_group='대학생·청년').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'policyList/list_youth.html', {'page_obj': page_obj, 'policies': page_obj.object_list })

# 노인
def policy_list_elder(request):
    policies = Policy.objects.filter(age_group='노인').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'policyList/list_elder.html', {'page_obj': page_obj, 'policies': page_obj.object_list })

def policy_list_all(request):
    policies = Policy.objects.filter(age_group='전연령').order_by('-like_count')
    paginator = Paginator(policies, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'policyList/list_001.html', {'page_obj': page_obj, 'policies': page_obj.object_list })

