from ..models import User, Administrator
from rest_framework import serializers


class AdministratorSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Administrator
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = User
        fields = '__all__'