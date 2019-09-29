from .models import Student
from rest_framework import serializers


class CreateStudentSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Student
        fields = '__all__'