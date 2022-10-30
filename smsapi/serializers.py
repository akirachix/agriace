from rest_framework import serializers
from agriApp.models import Farmer

#Farmer Serializer
class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Farmer
        fields=('first_name','last_name','address','phonenumber','id_no','code')