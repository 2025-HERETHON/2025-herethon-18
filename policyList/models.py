from django.db import models

# Create your models here.

AGE_GROUP_CHOICES = [
    ('영유아', '영유아'),
    ('청소년', '청소년'),
    ('대학생·청년', '대학생·청년'),
    ('중장년', '중장년'),
    ('노인', '노인'),
    ('전연령', '전연령'),
]

class Policy(models.Model):

    policy_id = models.AutoField(primary_key=True)
    policy_name = models.CharField(max_length=100)
    department = models.CharField(max_length=100, null=True, blank=True)
    age_group = models.CharField(max_length=20, choices=AGE_GROUP_CHOICES, default='전연령')
    like_count = models.IntegerField(default=0)
    scrap_count = models.IntegerField(default=0)
    review_count = models.IntegerField(default=0)

    def __str__(self):
        return self.policy_name
    

class Like(models.Model):
    like_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('login.User', on_delete=models.CASCADE, related_name="policylist_likes")
    policy = models.ForeignKey(Policy, on_delete=models.CASCADE, related_name="policylist_policy_likes")
    created_at = models.DateTimeField(auto_now_add=True)


class Scrap(models.Model):
    scrap_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('login.User', on_delete=models.CASCADE)
    policy = models.ForeignKey(Policy, on_delete=models.CASCADE, related_name="policylist_policy_scraps")
    created_at = models.DateTimeField(auto_now_add=True)
