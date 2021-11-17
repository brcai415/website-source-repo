from django.shortcuts import render
from rest_framework import generics
from .serializers import SongSuggestionSerializer
from .models import SongSuggestion
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class SongSuggestionView(generics.ListAPIView):
    queryset = SongSuggestion.objects.all()
    serializer_class = SongSuggestionSerializer
