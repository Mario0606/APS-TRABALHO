from .models import Events
from rest_framework import serializers


class CreateEventSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Events
        fields = '__all__'