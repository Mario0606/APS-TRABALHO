from ..Events.models import ConcentrationArea, Keyword
from .models import User, Administrator
from rest_framework import serializers


class CreateUserSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = User
        fields = '__all__'


class CreateUserLoginSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = User
        fields = ['email', 'password']


class CreateAdministratorSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Administrator
        fields = '__all__'


class ConcentrationAreaSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model: ConcentrationArea
        fields = '__all__'

    def create(self, validated_data):
        return ConcentrationArea.objects.create(**validated_data)


class KeywordSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model: Keyword
        fields = '__all__'

    def create(self, validated_data):
        return Keyword.objects.create(**validated_data)
