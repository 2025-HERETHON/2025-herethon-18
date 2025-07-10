from django.contrib import admin
from .models import Review, Like

# Register your models here.

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review_id', 'user',  'created_at')
    search_fields = ('user__nickname','content')

@admin.register(Like)
class ReviewLikeAdmin(admin.ModelAdmin):
    list_display = ('like_id', 'user', 'created_at')
    search_fields = ('user__nickname',)
