from apps.Events.models import Events
from rest_framework import serializers
from core.api.serializers import ConcentrationAreaSerializer, KeywordSerializer
from apps.Professor.api.serializers import ProfessorSerializer
class EventSerializer(serializers.ModelSerializer):
    """"""
    keywords = KeywordSerializer(many=True)
    reviews = ProfessorSerializer(many=True)
    concentration_area = ConcentrationAreaSerializer()
    class Meta:
        model = Events
        fields = '__all__'

class PostEventSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Events
        fields = '__all__'