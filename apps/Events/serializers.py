from .models import Events, ConcentrationArea
from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Events
        fields = '__all__'
