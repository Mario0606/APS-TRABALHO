from ..models import Professor
from rest_framework import serializers


class ProfessorSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Professor
        fields = '__all__'
