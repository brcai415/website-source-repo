from django.db import models
from django.db.models.fields import CharField
from django.db.models import Max
import string

def numberGenerator():
    curr_num = SongSuggestion.objects.all().aggregate(Max('songNumber'))
    songNumber = curr_num
    return songNumber

# Create your models here.
class SongSuggestion(models.Model):
    songNumber = models.IntegerField(unique=True)
    artistName = models.TextField()
    songName = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)