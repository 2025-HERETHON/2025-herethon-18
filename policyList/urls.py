from django.urls import path
from . import views


urlpatterns = [
    path('list_elder.html', views.policy_list_elder, name='policy_list_elder'),
    path('list_infant.html', views.policy_list_infant, name='policy_list_infant'),
    path('list_teen.html', views.policy_list_teen, name='policy_list_teen'),
    path('list_youth.html', views.policy_list_youth, name='policy_list_youth'),
    path('list_middle.html', views.policy_list_middle, name='policy_list_middle'), 
    path('list_001.html', views.policy_list_all, name='policy_list_all'),  
    path("api/like/", views.toggle_like, name="toggle_like"),
    path("api/bookmark/", views.toggle_bookmark, name="toggle_bookmark"),
]

# 정적 파일 서빙 (개발환경용)

