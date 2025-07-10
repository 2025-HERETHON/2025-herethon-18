from django.shortcuts import render, redirect, get_object_or_404
from .forms import ReviewForm
from .models import Review
from django.core.paginator import Paginator
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()


def review_create(request):
    if not request.user.is_authenticated:
        return redirect('log_001')

    user_nickname = request.user.nickname
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.user = request.user
            review.save()
            return redirect('review_list') 
    else:
        form = ReviewForm()
    
    return render(request, 'review/review_form.html', {'form': form, 'user_nickname': user_nickname})


def review_list(request):
    user_nickname = ''
    if request.user.is_authenticated:
        try:
            user = User.objects.get(pk=request.user.pk)
            user_nickname = user.nickname
        except User.DoesNotExist:
            user_nickname = 'Unknown'

    reviews = Review.objects.all().order_by('-created_at')
    paginator = Paginator(reviews, 5)
    page = request.GET.get('page')
    page_obj = paginator.get_page(page)

    return render(request, 'review/review_list.html', {
        'reviews': page_obj,
        'page_obj': page_obj,
        'user_nickname': user_nickname
    })