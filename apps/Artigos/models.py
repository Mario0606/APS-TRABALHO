from django.db import models
from apps.Administrador.models import User
from apps.Professor.models import Professor
from apps.Events.models import Events

class Author(models.Model):
    author_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

    class Meta:
        db_table = 'authors'


class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    tittle = models.CharField(max_length=30)
    summary = models.TextField()
    article_file = models.FileField()
    status = models.CharField(max_length=30, default='waiting_revision')
    user_submit = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True, related_name='user_submit')  # noqa: E501
    reviewer = models.OneToOneField(Professor, on_delete=models.CASCADE, blank=True, null=True, related_name='revisor')       # noqa: E501
    authors = models.ManyToManyField(Author)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    class Meta:
        db_table = 'articles'
    
