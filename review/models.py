from django.db import models

# Create your models here.

class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    policy = models.ForeignKey('policyList.Policy', on_delete=models.CASCADE)
    user = models.ForeignKey('login.User', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
    like_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('login.User', on_delete=models.CASCADE)
    policy = models.ForeignKey('policyList.Policy', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
