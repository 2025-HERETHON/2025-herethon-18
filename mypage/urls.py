from django.urls import path
from .views import mypage_view

urlpatterns = [
    path('', mypage_view, name='mypage'),
]