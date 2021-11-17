from django.urls import path
from .views import SongSuggestionView

urlpatterns = [
    path('', SongSuggestionView.as_view()),
]