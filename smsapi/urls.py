from django.urls import path,include
from rest_framework import routers
from .views import FarmerViewsets

router=routers.DefaultRouter()
router.register(r'farmer',FarmerViewsets)
urlpatterns=[
    path('',include(router.urls)),
]