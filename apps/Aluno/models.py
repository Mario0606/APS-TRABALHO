from django.db import models
from ..Administrador.models import User


class Student(User):
    matricule = models.IntegerField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'students'
