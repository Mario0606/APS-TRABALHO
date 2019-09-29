from django.db import models
from ..Administrador.models import User
from ..Professor.models import Professor


class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=30)
    summary = models.TextField()
    status = models.CharField(max_length=30)
    user_submit = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True, related_name='user_submit')  # noqa: E501
    proofreader = models.OneToOneField(Professor, on_delete=models.CASCADE, blank=True, null=True, related_name='revisor')       # noqa: E501

    class Meta:
        db_table = 'articles'


class Author(models.Model):
    author_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    artigo = models.ManyToManyField(Article)

    class Meta:
        db_table = 'authors'
