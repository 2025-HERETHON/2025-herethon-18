from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='log_001'),
    path('setting_1/', views.setting_1, name='log_002'),
    path('setting_2/', views.setting_2, name='log_003'),
]
