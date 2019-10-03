from .models import Article, Author
from rest_framework import serializers


class ArticlesSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Article
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Author
        fields = '__all__'