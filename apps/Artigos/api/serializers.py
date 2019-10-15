from ..models import Article, Author
from apps.Professor.api.serializers import ProfessorSerializer
from rest_framework import serializers
from apps.Administrador.api.serializers import UserSerializer

class ArticlesSerializer(serializers.ModelSerializer):
    """"""
    reviewer = ProfessorSerializer()
    user_submit = UserSerializer()
    class Meta:
        model = Article
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = Author
        fields = '__all__'

class PostArticleSerializer(serializers.ModelSerializer):
    """"""
    author = AuthorSerializer()
    class Meta:
        model = Article
        fields = ('tittle', 'summary', 'user_submit', 'reader_critic', 'event')
