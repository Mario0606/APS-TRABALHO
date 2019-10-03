from django.shortcuts import render
from rest_framework.response import Response
from apps.Events.models import Events
from apps.Professor.models import Professor
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny])
def appoint_reviewer(request):
    """"""
    reviews = []
    try:
        for review in request.data['reviews']:
            rev = Professor.objects.get(id=review)
            reviews.append(rev)
        event = Events.objects.get(event_id=request.data['event_id'])
        event.reviews.add(*reviews)
        return Response({"text": "Revisores indicados com sucesso"})
    except Professor.DoesNotExist:
        Response({"text": "Professor não existe"})
    
    except Events.DoesNotExist:
        Response({"text": "Evento não existe"})