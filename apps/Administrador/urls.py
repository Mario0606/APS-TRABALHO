from django.contrib import admin
from django.urls import path, include
from .views import new_event, events_list

urlpatterns = [
    path('newevent/', new_event),
    path('event_list/', events_list)
    # path('removeevent/', ),
    # path('searchevent/', ),
    # path('appointreviews/', ),
    # path('articles_submitted_tracker/', ),
    # path('articles_status/', )
]
