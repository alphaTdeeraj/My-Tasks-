from django.shortcuts import render
from rest_framework import generics, viewsets ,permissions
from .models import Task

from .serializers import TaskSerializer

class TaskAPI(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = TaskSerializer
    queryset = Task.objects.all()