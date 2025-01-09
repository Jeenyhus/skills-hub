from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LocationViewSet, TraineeViewSet, ScoreViewSet

router = DefaultRouter()
router.register(r'locations', LocationViewSet)
router.register(r'trainees', TraineeViewSet)
router.register(r'scores', ScoreViewSet)

urlpatterns = [
    path('', include(router.urls)),
]