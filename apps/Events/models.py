from django.db import models
from apps.Professor.models import Professor

class ConcentrationArea(models.Model):
    concentration_area_id = models.AutoField(primary_key=True)
    area = models.CharField(max_length=100)
    
    def __str__(self):
        return self.area

    class Meta:
        db_table = 'concentration_areas'

    def save(self, *args, **kwargs):
        self.concentration_area = self.concentration_area.lower()
        return super(ConcentrationArea, self).save(*args, **kwargs)

class Keyword(models.Model):
    keyword_id = models.AutoField(primary_key=True)
    keyword = models.CharField(max_length=30)

    def __str__(self):
        return self.keyword

    class Meta:
        db_table = 'keywords'

    def save(self, *args, **kwargs):
        self.keyword = self.keyword.lower()
        return super(Keyword, self).save(*args, **kwargs)


class Events(models.Model):
    """"""
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    sigla = models.CharField(max_length=10)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    start_submit = models.DateTimeField()
    deadline = models.DateTimeField()
    status = models.CharField(max_length=30, default="will_open")
    concentration_area = models.ForeignKey(ConcentrationArea, on_delete=models.CASCADE)  # noqa: E501
    keywords = models.ManyToManyField(Keyword)
    reviews = models.ManyToManyField(Professor)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'events'
    
    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        self.sigla = self.sigla.lower()
        self.status = self.status.lower()
        return super(Events, self).save(*args, **kwargs)

