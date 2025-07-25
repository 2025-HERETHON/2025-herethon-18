"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('login.urls')), # 차후 기본 url로 수정 필요 !!
    path('login/', include('login.urls')),
    path('home/', include('home.urls')),
    path('policyList/', include('policyList.urls')),
    path('review/', include('review.urls')),
    path('mypage/', include('mypage.urls')),
    path('community/', include('community.urls')),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])