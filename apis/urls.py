from django.urls import path,include
from rest_framework import routers
from .views import UserViewsets

router = routers.DefaultRouter()
router.register(r'user',UserViewsets)
urlpatterns = [
    path('',include(router.urls)),
]