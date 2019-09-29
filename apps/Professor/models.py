from django.db import models
from ..Administrador.models import User


class Professor(User):
    tittle = models.CharField(max_length=100)
    search_area = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'professors'
