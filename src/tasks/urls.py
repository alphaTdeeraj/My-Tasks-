from django.urls import path 
from rest_framework.routers import DefaultRouter
from .views import TaskAPI

router = DefaultRouter()
router.register('',TaskAPI, 'tasks')
urlpatterns = router.urls