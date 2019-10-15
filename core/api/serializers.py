from apps.Events.models import ConcentrationArea, Keyword
from rest_framework import serializers
from apps.Administrador.models import User

class ConcentrationAreaSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = ConcentrationArea
        fields = '__all__'


class KeywordSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Keyword
        fields = '__all__'

class LoginSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = User
        fields = ('address', 'password')
