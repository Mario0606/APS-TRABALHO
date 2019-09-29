from .models import Article, Author
from rest_framework import serializers


class CreateArticlesSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Article
        fields = '__all__'


class CreateAuthorSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Author
        fields = '__all__'