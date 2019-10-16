from django.db import models


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    type = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'users'
    
    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        return super(User, self).save(*args, **kwargs)


class Administrator(User):
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'administradores'
