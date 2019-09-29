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

    