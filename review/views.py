from django.shortcuts import render, redirect, get_object_or_404
from .forms import ReviewForm
from .models import Review
from django.core.paginator import Paginator
from django.contrib.auth.models import User

def review_create(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.user = User.objects.first()  ##임의로 로그인 전 유저 넣기 위한 코드 나중에 삭제!!
            review.save()
            return redirect('review_list') 
    else:
        form = ReviewForm()
    
    return render(request, 'review/review_form.html', {'form': form})

def review_list(request):
    reviews = Review.objects.all().order_by('-created_at')
    paginator = Paginator(reviews, 5)  # 5개씩 보여주기
    page = request.GET.get('page')
    page_obj = paginator.get_page(page)
    return render(request, 'review/review_list.html', {'reviews': page_obj, 'page_obj': page_obj})