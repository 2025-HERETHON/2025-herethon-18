from django.contrib import admin
from .models import Policy, Like, Scrap

# Register your models here.
@admin.register(Policy)
class PolicyAdmin(admin.ModelAdmin):
    list_display = ('policy_id', 'policy_name', 'department', 'age_group', 'like_count', 'scrap_count', 'review_count')
    search_fields = ('policy_name', 'department')

@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ('like_id', 'user', 'policy', 'created_at')
    search_fields = ('user__nickname', 'policy__policy_name')

@admin.register(Scrap)
class ScrapAdmin(admin.ModelAdmin):
    list_display = ('scrap_id', 'user', 'policy', 'created_at')
    search_fields = ('user__nickname', 'policy__policy_name')
