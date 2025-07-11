from django.urls import path
from . import views

urlpatterns = [
    path('', views.com_propose, name='com_001'),
    path('propose/', views.com_propose, name='com_001'),
    path('written/', views.com_written, name='com_002'),
    path('create/', views.com_create, name='com_003'),
]
