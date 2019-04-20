from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Task

from .serializers import TaskSerializer

class TaskAPI(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    
