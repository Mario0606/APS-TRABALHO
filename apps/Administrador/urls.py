from django.contrib import admin
from django.urls import path, include
from .views import appoint_reviewer

urlpatterns = [
    path('appoint_reviewer/', appoint_reviewer)
]
