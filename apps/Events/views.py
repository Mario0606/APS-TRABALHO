from django.shortcuts import render
from .serializers import EventsSerializer
from rest_framework.response import Response
from .models import Events
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny])
def create_new_event(request):
    """"""    
    serializer = EventsSerializer(data=request.data)
    if serializer.is_valid():
        pass
    return Response(serializer.errors)

