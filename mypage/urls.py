from django.urls import path
from . import views


urlpatterns = [
    path('', views.mypage_view, name='mypage'),
    path('likeList/', views.mypage_likeList, name='likeList'),
    path('scrapList/', views.mypage_scrapList, name='scrapList'),
]