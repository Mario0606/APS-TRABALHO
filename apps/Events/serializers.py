from .models import Events
from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Events
        fields = '__all__'
    
    def create(self, validated_data):
        """
        Create and return a new `Person` instance, given the validated data.
        :param validated_data:
        """
        return Events.objects.create(**validated_data)
    
     def update(self, instance, validated_data):
        """
        Update and return an existing `Person` instance, given the validated data.
        """   
        instance.name = validated_data.get(
            'name', instance.name)
        instance.deadline = validated_data.get(
            'deadline', instance.deadline)
        instance.startDate = validated_data.get(
            'startDate', instance.startDate)
        instance.concentration_area = validated_data.get(
            'concentration_area', instance.concentration_area)
        instance.keywords = validated_data.get(
            'keywords', instance.keywords)

        instance.save()
        return instance