from django.forms import ModelForm
from ..Events.models import Events


class EventForm(ModelForm):
    class meta:
        model = Events
        fields = ['event_id', 'name', 'startDate', 'deadline', 'concentration_area', 'keywords']   # noqa: E501
