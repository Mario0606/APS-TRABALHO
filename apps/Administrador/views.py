from django.http import HttpResponse, JsonResponse
from .forms import EventForm
from ..Events.models import Events


def events_list(request):
    """"""
    events = Events.objects.all()
    return JsonResponse(events)


def new_event(request):
    """"""
    form = EventForm(request.POST, None)
    if form.is_valid():
        form.save()
    return HttpResponse(200)
