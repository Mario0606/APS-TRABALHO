from django.db import models


class ConcentrationArea(models.Model):
    concentration_area_id = models.AutoField(primary_key=True)
    area = models.CharField(max_length=100)
    
    def __str__(self):
        return self.area

    class Meta:
        db_table = 'concentration areas'


class Keyword(models.Model):
    keyword_id = models.AutoField(primary_key=True)
    keyword = models.CharField(max_length=30)

    def __str__(self):
        return self.keyword

    class Meta:
        db_table = 'keywords'


class Events(models.Model):
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    startDate = models.DateTimeField()
    deadline = models.DateTimeField()
    concentration_area = models.ForeignKey(ConcentrationArea, on_delete=models.CASCADE)  # noqa: E501
    keywords = models.ManyToManyField(Keyword)

    def __str__(self):
        return self.keyword

    class Meta:
        db_table = 'events'
