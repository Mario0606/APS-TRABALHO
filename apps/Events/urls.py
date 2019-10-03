from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .api.viewsets import EventViewSet  

router = routers.DefaultRouter()
router.register(r'events', EventViewSet, basename='Events')

urlpatterns = [
    path('', include(router.urls))
]
