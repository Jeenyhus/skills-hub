from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LocationViewSet, TraineeViewSet, ScoreViewSet, api_home_view

router = DefaultRouter()
router.register(r'locations', LocationViewSet)
router.register(r'trainees', TraineeViewSet)
router.register(r'scores', ScoreViewSet)

urlpatterns = [
    path('', api_home_view, name='api_home'),
    path('', include(router.urls)),

]