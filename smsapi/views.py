from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from agriApp.models import Farmer
from .serializers import FarmerSerializer

class FarmerViewsets(viewsets.ModelViewSet):
    queryset=Farmer=Farmer.objects.all()
    serializer_class=FarmerSerializer