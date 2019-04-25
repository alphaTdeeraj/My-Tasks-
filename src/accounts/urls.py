from django.urls import path , include, re_path
from .views import (FacebookLogin , TwitterLogin)


urlpatterns = [
    path('', include('rest_auth.urls')),
    re_path('^rest-auth/facebook/$', FacebookLogin.as_view(), name='fb_login'),
    re_path('^rest-auth/twitter/$', TwitterLogin.as_view(), name='twitter_login'),
]


