from django.db import models

# Create your models here.

class User(models.Model):
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
    password = models.CharField(max_length=255)
    email = models.EmailField(max_length=100, unique=True)
    nickname = models.CharField(max_length=50, unique=True)
    birth_date = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    age_group = models.CharField(max_length=20, choices=AGE_GROUP_CHOICES, default='전연령')

    def __str__(self):
        return self.nickname
