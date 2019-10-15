"""Educar URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from apps.Events.api.viewsets import EventViewSet, CreateEventViewSet
from apps.Administrador.api.viewsets import AdministratorViewSet
from apps.Aluno.api.viewsets import StudentViewSet
from apps.Professor.api.viewsets import ProfessorViewSet
from .api.viewsets import KeywordsViewSet, ConcentrationAreaViewSet, LoginViewSet
from apps.Artigos.api.viewsets import CreateArticleViewSet, ArticleViewSet, AuthorViewSet

router = routers.DefaultRouter()
router.register(r'events', EventViewSet, base_name='Events')
router.register(r'create_event', CreateEventViewSet, base_name='CreateEvent')
router.register(r'keyword', KeywordsViewSet, base_name='Keyword')
router.register(r'concentration_area', ConcentrationAreaViewSet, base_name='ConcentrationArea')
router.register(r'administrator', AdministratorViewSet, base_name='Administrator')
router.register(r'student', StudentViewSet, base_name='Student')
router.register(r'professor', ProfessorViewSet, base_name='Professor')
router.register(r'user', LoginViewSet, base_name='Login')
router.register(r'create_article', CreateArticleViewSet, base_name='CreateArticle')
router.register(r'articles', ArticleViewSet, base_name='Article')


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin_review/', include('apps.Administrador.urls')),
    path('admin/', admin.site.urls),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
