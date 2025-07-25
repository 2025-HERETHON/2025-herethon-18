from django.contrib import admin
from .models import User

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'nickname', 'email', 'age_group', 'phone_number', 'birth_date')
    search_fields = ('nickname', 'email')
