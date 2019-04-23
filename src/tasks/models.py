from django.db import models

from .helpers import categoryList


class Task(models.Model):
    name        = models.CharField(max_length=20, blank=False , null = False)
    description = models.TextField(blank=True , null=False , default='No description')
    category    = models.CharField(max_length=20,choices=categoryList() , blank=False , null=False)
    start       = models.DateField(auto_now_add=True)
    deadline    = models.DateField()
    completed   = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
