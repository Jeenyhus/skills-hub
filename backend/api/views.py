from rest_framework import viewsets, filters
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import reverse
from rest_framework.views import APIView
from django.shortcuts import render
from .models import Location, Trainee, Score
from .serializers import LocationSerializer, TraineeSerializer, ScoreSerializer

class LocationViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing location instances.
    
    Attributes:
        queryset: A queryset containing all Location instances.
        serializer_class: The serializer class used for the Location model.
        basename: The base name for the URL patterns.

    Methods:
        list(request, *args, **kwargs):
            Retrieves a list of all location instances.
            Returns a JSON response with a status of 'success' and the data.
            In case of an error, returns a JSON response with a status of 'error' and the error message.

        retrieve(request, *args, **kwargs):
            Retrieves a specific location instance by its ID.
            Returns a JSON response with a status of 'success' and the data.
            In case of an error, returns a JSON response with a status of 'error' and the error message.
    """
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    basename = 'location'

    def list(self, request, *args, **kwargs):
        try:
            response = super().list(request, *args, **kwargs)
            response.data = {
                'status': 'success',
                'data': response.data
            }
            return response
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

    def retrieve(self, request, *args, **kwargs):
        try:
            response = super().retrieve(request, *args, **kwargs)
            response.data = {
                'status': 'success',
                'data': response.data
            }
            return response
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

class TraineeViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing trainee instances.

    Attributes:
        queryset (QuerySet): The queryset that retrieves all Trainee objects.
        serializer_class (Serializer): The serializer class used to serialize Trainee objects.
        basename (str): The base name for the URL patterns.

    Methods:
        list(request, *args, **kwargs):
            Retrieves a list of all trainee instances.
            Returns a JSON response with a status of 'success' and the list of trainees.
            In case of an error, returns a JSON response with a status of 'error' and the error message.

        retrieve(request, *args, **kwargs):
            Retrieves a specific trainee instance by its ID.
            Returns a JSON response with a status of 'success' and the trainee data.
            In case of an error, returns a JSON response with a status of 'error' and the error message.
    """
    queryset = Trainee.objects.all()
    serializer_class = TraineeSerializer
    basename = 'trainee'

    def list(self, request, *args, **kwargs):
        try:
            response = super().list(request, *args, **kwargs)
            response.data = {
                'status': 'success',
                'data': response.data
            }
            return response
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

    def retrieve(self, request, *args, **kwargs):
        try:
            response = super().retrieve(request, *args, **kwargs)
            response.data = {
                'status': 'success',
                'data': response.data
            }
            return response
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

class ScoreViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Score instances.

    Attributes:
        queryset (QuerySet): The queryset that retrieves all Score objects.
        serializer_class (Serializer): The serializer class used for Score objects.
        basename (str): The base name for the URL patterns.
        filter_backends (list): The list of filter backends used for searching and ordering.
        search_fields (list): The fields that can be searched.
        ordering_fields (list): The fields that can be used for ordering.

    Methods:
        list(request, *args, **kwargs):
            Retrieves a list of Score instances.
            Returns a JSON response with status and data.
            Handles exceptions and returns an error response if any.

        retrieve(request, *args, **kwargs):
            Retrieves a specific Score instance by its ID.
            Returns a JSON response with status and data.
            Handles exceptions and returns an error response if any.
    """
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    basename = 'score'
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['trainee__first_name', 'trainee__last_name', 'grade']
    ordering_fields = ['total_score', 'created_at']

    def list(self, request, *args, **kwargs):
        try:
            response = super().list(request, *args, **kwargs)
            response.data = {
                'status': 'success',
                'data': response.data
            }
            return response
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

    def retrieve(self, request, *args, **kwargs):
        try:
            response = super().retrieve(request, *args, **kwargs)
            response.data = {
                'status': 'success',
                'data': response.data
            }
            return response
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=500)

def home_view(request):
    return render(request, 'api/home.html')

def api_home_view(request):
    return render(request, 'api/api.html')