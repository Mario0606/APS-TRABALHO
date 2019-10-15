from apps.Events.models import Events
from rest_framework import serializers
from core.api.serializers import ConcentrationAreaSerializer, KeywordSerializer

class EventSerializer(serializers.ModelSerializer):
    """"""
    keywords = KeywordSerializer(many=True)
    concentration_area = ConcentrationAreaSerializer()
    class Meta:
        model = Events
        fields = '__all__'

class PostEventSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Events
        fields = '__all__'