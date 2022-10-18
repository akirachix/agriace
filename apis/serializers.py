from rest_framework import serializers
from apis.models import User
from django.contrib.auth.models import User
from .models import User



# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'first_name', 'last_name','email','password')
