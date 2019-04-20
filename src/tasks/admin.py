from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', '-deadline')
    search_fields = ('name', 'deadline')
    class Meta:
        model = Task