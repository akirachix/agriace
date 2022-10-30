from rest_framework import serializers
from agriApp.models import Farmer

#Farmer Serializer
class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Farmer
        fields=('name','address')