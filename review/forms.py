from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['title', 'content']
        widgets = {
            'title': forms.TextInput(attrs={
                'id': 'write-input',
                'placeholder': '복지 서비스를 입력하세요.',
            }),
            'content': forms.Textarea(attrs={
                'id': 'write-content',
                'placeholder': '후기를 작성해주세요!',
            }),
        }
