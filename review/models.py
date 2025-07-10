from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


User = get_user_model()

class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    title = models.CharField(max_length=100, default='제목 없음')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def summary(self):
        return self.content[:60] + "..." if len(self.content) > 60 else self.content


class Like(models.Model):
    like_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('login.User', on_delete=models.CASCADE, related_name="review_likes")
    created_at = models.DateTimeField(auto_now_add=True)
