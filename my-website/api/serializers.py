from rest_framework import serializers
from .models import SongSuggestion


class SongSuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongSuggestion
        fields = ('id', 'songNumber', 'artistName', 'songName', 'created_at')