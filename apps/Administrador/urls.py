from django.contrib import admin
from django.urls import path, include
from .views import new_search_area, events_list

urlpatterns = [
    path('new_concentration_area/', new_concentration_area),
    path('new_keyword/', new_keyword)
]
