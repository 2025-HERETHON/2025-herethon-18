from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='main_002'),
    path('infant/', views.home_infant, name='home_infant'),
    path('middle/', views.home_middle, name='home_middle'),
    path('teen/', views.home_teen, name='home_teen'),
    path('youth/', views.home_youth, name='home_youth'),
    path('elder/', views.home_elder, name='home_elder'),

]