from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, nickname, email, password=None, **extra_fields):
        if not nickname:
            raise ValueError('닉네임은 필수입니다.')
        if not email:
            raise ValueError('이메일은 필수입니다.')

        email = self.normalize_email(email)
        user = self.model(nickname=nickname, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nickname, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(nickname, email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    AGE_GROUP_CHOICES = [
        ('영유아', '영유아'),
        ('청소년', '청소년'),
        ('대학생·청년', '대학생·청년'),
        ('중장년', '중장년'),
        ('노인', '노인'),
        ('전연령', '전연령'),
    ]

    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    nickname = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    birth_date = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    age_group = models.CharField(max_length=20, choices=AGE_GROUP_CHOICES, default='전연령')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'nickname'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
        return self.nickname

