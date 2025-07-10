from django.urls import path
from . import views

urlpatterns = [
   path('list/', views.review_list, name='review_list'),
   path('create/', views.review_create, name='review_create'),
]